import { AuthForms } from './models/auth-forms';
import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import { AuthModel } from './models/auth-model';
import { routingService } from '../routing/routing.service';
import { api } from '../../api/api';
import { accountService } from '../account/account.service';
import { validationService } from '../validation/validation.service';
import { extractQueryParam } from '../../utils/extract-query-param';






export class AuthService {

	/**
	 * Authorization forms
	 */
	@observable
	public forms = new AuthForms();

	/**
	 * Get form by name from forms
	 */
	@autobind
	public getForm  (name : string) : AuthModel {
		return this.forms[name] as AuthModel;
	}


	/**
	 * Authorize user
	 */
	@autobind
	public async authorize (token : string) {
		localStorage.setItem('authToken', token);
		await accountService.get();
		routingService.push(`/lk`);
	}

	/**
	 * Calls validation services and resets errors
	 */
	@autobind
	private validateForm (form : AuthModel) : boolean {
		form.errors = [];
		return validationService.validate();
	}

	/**
	 * Set form errors
	 */
	@autobind
	private setFormErrors (form : AuthModel, response, singleFieldName : string = 'email') {
		console.log(response)
		form.errors = Array.isArray(response.errors) ? response.errors : [{ name: singleFieldName, message: response.message }];
	}

	/**
	 * Removes auth token and redirect to login page
	 */
	@autobind
	public async logout () {
		try {
			await api.account.logout();
			routingService.push('/auth/login');
		} catch {}
	}

	/**
	 * Login request
	 */
	@autobind
	@action
	public async login() {
		const { login } = this.forms;
		if (!this.validateForm(login)) return;
		try {
			const response = await api.account.login(login.email, login.password);
			await this.authorize(response.content.token);
		} catch(error) {
			this.setFormErrors(login, error);
		}
	}

	/**
	 * Register and log in if success
	 */
	@autobind
	@action
	public async register() {
		const { registration } = this.forms;
		if (!this.validateForm(registration)) return;
		try {
			const response = await api.account.register(registration.email, registration.password);
			await this.authorize(response.content.token);
		} catch(error) {
			this.setFormErrors(registration, error);
		}
	}


	/**
	 * Send reset email if email valid
	 */
	@autobind
	@action
	public async sendReset () {
		const { sendReset } = this.forms;
		if (!this.validateForm(sendReset)) return;
		try {
			const response = await api.account.forgotPassword(sendReset.email);
		} catch(error) {
			this.setFormErrors(sendReset, error);
		}
	}

	/**
	 * Save new password
	 */
	@autobind
	@action
	public async savePassword () {
		const { savePassword } = this.forms;
		if (!this.validateForm(savePassword)) return;

		try {
			const token = extractQueryParam(window.location.hash, 'token');
			const response = await api.account.resetPassword(savePassword.password, token);
			routingService.push('/auth/login');
		} catch (error) {
			this.setFormErrors(savePassword, error, 'password');
		}	
	}

}



export const authService = new AuthService();
