
import { User } from "./user";
import { observable } from 'mobx';





export class ProfileModel {

	/**
	 * Profile user
	 */
	@observable
	public user = new User();




}