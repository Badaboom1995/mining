import { observable, action } from 'mobx';
import { api } from "../../api/api";
import { autobind } from "core-decorators";
import { routingService } from '../routing/routing.service';
import { User } from './models/user';






export class AccountService {
	/**
	 * User model
	 * 
	 * @type {User}
	 * @memberof AccountService
	 */
	@observable
	public user : User = new User();
	/**
	 * Is app loaded
	 */
	@observable
	public isAppLoaded : boolean = false;
	/**
	 * Get 
	 */
	@autobind
	@action
	public async get () {
		try {
			const response = await api.account.profile();
			this.user = Object.assign(new User(), response.content);
			if (routingService.history.location.pathname.startsWith('/auth')) {
				routingService.push('/');
			}
		} catch(err) {
			routingService.push('/auth/login');
		}
		this.isAppLoaded = true;
	}
}



export const accountService = new AccountService();