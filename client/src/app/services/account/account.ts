import { observable, action } from 'mobx';
import { ProfileModel } from "./models/profile-model";
import { api } from "../../api/api";
import { autobind } from "core-decorators";
import { routingService } from '../routing/routing';






export class AccountService {
	/**
	 * Own account profile model
	 */
	@observable
	public account: ProfileModel = new ProfileModel();
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
			this.account = response.content;
		} catch(err) {
			routingService.push('/auth/login');
		}
		this.isAppLoaded = true;
	}
}



export const accountService = new AccountService();