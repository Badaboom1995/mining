






enum NotificationTypes {
	USER_ADD = 0,
	SOME_OTHER_TYPE = 1
}


export class NotificationModel {

	/**
	 *
	 */
	public type : NotificationTypes = NotificationTypes.USER_ADD;

	/**
	 *
	 */
	public isConfirm : boolean = false;


}



class NotificationUserConfirmModel extends NotificationModel {
	public type : NotificationTypes = NotificationTypes.USER_ADD;
	public isConfirm : boolean = true;


	// public user : UserModel;



}
