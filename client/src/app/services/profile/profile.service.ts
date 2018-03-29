import { User } from '../account/models/user';
import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import { api } from '../../api/api';
import { validationService } from '../validation/validation.service';
import { accountService } from '../account/account.service';




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
	@action.bound
	public userSet ({name, value}) {
		this.user[name] = value;
	}

	/**
	 * Save profile
	 * @memberof ProfileService
	 */
	@action.bound
	public async save () {
		if (!validationService.validate()) return;
		try {
			await api.account.settings(this.user);
		} catch (error) { }
	}
	/**
	 * Get profile
	 * @memberof ProfileService
	 */
	@action.bound
	public async get () {
		try {
			const response = await api.account.profile();
			this.user = Object.assign(this.user, response.content);
			this.isLoaded = true;
 		} catch (error) { }
	}
	/**
	 * unload profile
	 */
	@action.bound
	public async unload() {
		this.isLoaded = false;
		this.isSaving = false;
	}



	@action.bound
	public async uploadPhoto(file : File) {
		const uri = URL.createObjectURL(file);
		try {
			this.user.photo = uri;
			accountService.user.photo = uri;
			await api.account.uploadAvatar(file);
		} catch(error) {

		}
	}
}

export const profileService = new ProfileService();