import { AuthForms } from './models/auth-forms';
import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import { AuthModel } from './models/auth-model';
import { routingService } from '../routing/routing';
import { api } from '../../api/api';
import { accountService } from '../account/account';
import { validationService } from '../validation/validation';






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
		routingService.push(`/`);
	}

	/**
	 * Removes auth token and redirect to login page
	 */
	@autobind
	public async logout () {

		routingService.push('/auth/login');
	}

	/**
	 * Login request
	 */
	@autobind
	@action
	public async login() {
		const { login } = this.forms;
		login.errors = [];
		if (!validationService.validate()) return;

		try {
			const response = await api.account.login(login.email, login.password);
			await this.authorize(response.content.token);
		} catch(error) {
			login.errors = [{ name: 'email', message: error.message }];
		}
	}

	/**
	 * Register and log in if success
	 */
	@autobind
	@action
	public async register() {
		const { registration } = this.forms;
		registration.errors = [];
		if (!validationService.validate()) return;
		try {
			const response = await api.account.register(registration.email, registration.password);
			await this.authorize(response.content.token);
		} catch(error) {
			registration.errors = error.content || [{ name: 'email', message: error.message,  }];
		}
	}


}



export const authService = new AuthService();