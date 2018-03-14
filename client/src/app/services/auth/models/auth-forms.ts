import { AuthModel } from './auth-model';
import { observable } from 'mobx';





export class AuthForms {
	/**
	 * Login form
	 */
	@observable
	public login : AuthModel = new AuthModel();

	/**
	 * Registration form
	 */
	@observable
	public registration : AuthModel = new AuthModel();

	/**
	 * Send reset form
	 */
	@observable
	public sendReset : AuthModel = new AuthModel();


	/**
	 * Save password form
	 */
	@observable
	public savePassword : AuthModel = new AuthModel();



	
}


