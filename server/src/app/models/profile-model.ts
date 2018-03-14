export class ProfileUser {
  public id: string;
  public name: string;
  public email: string;
  public language: string;
  public photo: string;
  public company: string;
  public duty: string;
  public companyUrl: string;
  public companyName: string;
  public position: string;
  public phone: string;
  public skype: string;
  public firstName: string;
  public secondName: string;
  public lastName: string;
  public reciveNotifications: boolean;
  public invitedBy: string;
  public registrationType: string;
  public contactEmail: string;
  public createdAt: string;
  public googleAccount: any;
  public facebookAccount: any;
  public contactsCount: any;
  public lastContacts: any;
}

export class ProfileModel {
  /**
   * User model
   */
  public user: ProfileUser = new ProfileUser();

  /**
   * Creates an instance of ProfileModel.
   * @param {*} user0/contacts/add
   * @memberof ProfileModel
   */
  public constructor(_user: any) {
    const {user} = this;
    user.id = _user._id;
    user.name = _user.displayName;
    user.language = _user.language;
    user.email = _user.email;
    user.photo = _user.photo;
    user.company = _user.company;
    user.duty = _user.duty;
    user.companyUrl = _user.companyUrl;
    user.companyName = _user.companyName;
    user.position = _user.position;
    user.phone = _user.phone;
    user.firstName = _user.firstName;
    user.secondName = _user.secondName;
    user.lastName = _user.lastName;
    user.reciveNotifications = _user.reciveNotifications;
    user.invitedBy = _user.invitedBy;
    user.registrationType = _user.registrationType;
    user.contactEmail = _user.contactEmail;
    user.skype = _user.skype;
    user.createdAt = _user.createdAt;
    user.googleAccount = _user.googleAccount;
    user.facebookAccount = _user.facebookAccount;
    user.contactsCount = _user.contactsCount;
    user.lastContacts = _user.lastContacts;
  }
}


export class PrivateProfileModel {
  public user: ProfileUser = new ProfileUser();
  public constructor(_user: any) {
    const {user} = this;
    user.id = _user._id;
    user.email = _user.email;
    user.photo = _user.photo;
    user.company = _user.company;
    user.duty = _user.duty;
    user.companyUrl = _user.companyUrl;
    user.companyName = _user.companyName;
    user.position = _user.position;
    user.phone = _user.phone;
    user.firstName = _user.firstName;
    user.secondName = _user.secondName;
    user.lastName = _user.lastName;
    user.contactEmail = _user.contactEmail;
    user.createdAt = _user.createdAt;
  }
}

export class NotificationProfileModel {
  public user: ProfileUser = new ProfileUser();
  public constructor(_user: any) {
    const {user} = this;
    user.id = _user._id;
    user.email = _user.email;
    user.photo = _user.photo;
    user.duty = _user.duty;
    user.companyName = _user.companyName;
    user.position = _user.position;
    user.firstName = _user.firstName;
    user.secondName = _user.secondName;
    user.lastName = _user.lastName;
    user.createdAt = _user.createdAt;
  }
}
