import { observable } from 'mobx';




export class User {
	/**
	 * User company
	 */
	@observable
	public companyName: string = '';
	/**
	 * User company url
	 */
	@observable
	public companyUrl: string = '';
	/**
	 * User email displayed in contacts
	 */
	@observable
	public contactEmail: string = '';
	/**
	 * Total count of user contacts
	 */
	@observable
	public contactsCount: number = 0; 

	/**
	 * User acc created at
	 */
	@observable
	public createdAt: string = '';
	/**
	 * User reg email
	 */
	@observable
	public email: string = '';
	/**
	 * User facebook account
	 */
	@observable
	public facebookAccount: any = {};
	/**
	 * User first name
	 */
	@observable
	public firstName: string = '';
	/**
	 * User google account
	 */
	@observable
	public googleAccount: any = {};
	/**
	 * Mongo id
	 */
	@observable
	public id: string = '';
	/**
	 * User invited by
	 */
	@observable
	public invitedBy: string = '';
	/**
	 * User locale
	 */
	@observable
	public language: string = '';
	/**
	 * Last contact
	 */
	@observable
	public lastContacts: User[] = [];
	/**
	 * User last name
	 */
	@observable
	public lastName: string = '' ;
	/**
	 * User phone
	 */
	@observable
	public phone: string = '';
	/**
	 * Photo url
	 */
	@observable
	public photo: string = '';
	/**
	 * Work position
	 */
	@observable
	public position: string = '';
	/**
	 * notifications enabled
	 */
	@observable
	public reciveNotifications: boolean = false;
	/**
	 * Registration type (google, fb, email)
	 */
	@observable
	public registrationType: string = '';
	/**
	 * User's second name
	 */
	@observable
	public secondName: string = '';
	/**
	 * User's skype
	 */
	@observable
	public skype: string = '';
}