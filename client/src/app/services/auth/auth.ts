import { AuthForms } from './models/auth-forms';
import { observable } from 'mobx';
import { autobind } from 'core-decorators';
import { AuthModel } from './models/auth-model';
import { routingService } from '../routing/routing';






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
	 * Authorize, save token and redirect to inner areas
	 */
	@autobind
	public async authorize () {
		
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
	public async login() {

	}



}



export const authService = new AuthService();