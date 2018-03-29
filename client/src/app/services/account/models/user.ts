import { observable } from 'mobx';



export class User {
	@observable
	public id: string = '';

	@observable
	public nickname: string = '';

	@observable
	public email: string = '';

	@observable
	public firstName: string = '';
	@observable
	public lastName: string = '';

	@observable
	public secondName: string = '';

	@observable
	public skype: string = '';
	@observable
	public birthDate: string = '';
	@observable
	public country: string = '';
	@observable
	public city: string = '';
	@observable
	public cardNumber: string = '';
	@observable
	public ethWithdraw: string = '';
	@observable
	public zcashWithdraw: string = '';

	@observable
	public phone: string = '';

	@observable
	public companyUrl: string = '';

	@observable
	public companyName: string = '';

	@observable
	public position: string = '';

	@observable
	public photo: string = '';

	@observable
	public invitedBy: string = '';

	@observable
	public password: string = '';

	@observable
	public passwordResetToken: string = '';

	@observable
	public passwordResetExpires: number;

	@observable
	public referrals: string[] = [];

	@observable
	public bitcoin: string = '';

	@observable
	public advcash: string = '';

	@observable
	public privat24: string = '';

	@observable
	public eth: string = '';

	@observable
	public visa: string = '';

	@observable
	public reciveNotificationOnNewPartner: boolean = false;

	@observable
	public reciveNotificationOnNewTeamPartner: boolean = false;

	@observable
	public reciveNotificationOnNewPartnerInvestment: boolean = false;

	@observable
	public reciveNotificationOnNewTeamPartnerInvestment: boolean = false;

	@observable
	public reciveNotificationsEveryWeek: boolean = false;

	@observable
	public reciveNotificationsEveryMonth: boolean = false;

}