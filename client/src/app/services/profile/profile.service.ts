import { User } from '../account/models/user';
import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import { api } from '../../api/api';




export class ProfileService {
	/**
	 * Profile user to edit
	 * @type {User}
	 * @memberof ProfileService
	 */
	@observable
	public user : User = new User();

	/**
	 * Is profile loaded
	 * @type {boolean}
	 * @memberof ProfileService
	 */
	@observable
	public isLoaded : boolean = false;
	/**
	 * Is profile saving now
	 * @type {boolean}
	 * @memberof ProfileService
	 */
	@observable
	public isSaving : boolean = false;
	/**
	 * Setter for user model
	 */
	@autobind
	@action
	public userSet ({name, value}) {
		this.user[name] = value;
	}

	/**
	 * Save profile
	 * @memberof ProfileService
	 */
	@autobind
	@action
	public async save () {
		try {
			await api.account.settings(this.user);
		} catch (error) { }
	}
	/**
	 * Get profile
	 * @memberof ProfileService
	 */
	@autobind
	@action
	public async get () {
		try {
			const response = await api.account.profile();
			this.user = Object.assign(this.user, response.content);
 		} catch (error) { }
	}

}

export const profileService = new ProfileService();