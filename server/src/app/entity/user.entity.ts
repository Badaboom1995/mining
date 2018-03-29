import {
  Column,
  AfterInsert,
  Entity,
  ObjectIdColumn,
  OneToOne,
  getConnection,
  InsertEvent,
  BeforeInsert,
} from 'typeorm';
import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  MaxLength,
  Length,
  IsEnum,
  IsDate,
  IsBoolean,
  IsString,
} from 'class-validator';
import * as bcrypt from 'bcryptjs';

import { APIError } from '../helpers';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity('user-balance')
export class UserBalance {
  public constructor( @Column() public userId: string) {
    // this.userId = userId;
  }

  @ObjectIdColumn() public id: string;
  //
  // @Column()
  // public userId : string;

  @Column() public eth: number;

  @Column() public zcash: number;
}

@Entity('user-earnings')
export class UserEarnings {
  public constructor( @Column() public userId: string) {
    // this.userId = userId;
  }

  @ObjectIdColumn() public id: string;

  @Column() public eth: number;

  @Column() public zcash: number;
}

@Entity('users')
export class User {

  @ObjectIdColumn() 
  public id: string;

  @Column({ default: '' })
  public nickname: string;

  @Column({ default: '' })
  public firstName: string;

  @Column({ default: '' })
  public secondName: string;

  @Column({ default: '' })
  public lastName: string;

  @Column({ default: '' })
  public skype: string;

  @Column({ default: '' })
  public phone: string;

  @Column({ default: '' })
  public companyUrl: string;

  @Column({ default: '' })
  public companyName: string;

  @Column({ default: '' })
  public position: string;

  @Column({ default: '' })
  public photo: string;

  @Column({ default: '' })
  public invitedBy: string;

  @Column({ default: '' })
  public password: string;

  @Column({ default: '' })
  public passwordResetToken: string;

  @Column({ default: 0 })
  public passwordResetExpires: number;

  @Column({ default: [] })
  public referrals: string[];
  @Column({ default: '' })
  public contry : string;
  @Column({ default: '' })
  public city : string;
  @Column({ default: '' })
  public bitcoin: string;
  @Column({ default: '' })
  public cardNumber: string = '';
  @Column({ default: '' })
  public ethWithdraw: string = '';
  @Column({ default: '' })
  public zcashWithdraw: string = '';

  @Column({ default: '' })
  public advcash: string;

  @Column({ default: '' })
  public privat24: string;

  @Column({ default: '' })
  public eth: string;

  @Column({ default: '' })
  public visa: string;


  @Column({ default: false })
  public reciveNotificationOnNewPartner: boolean;

  @Column({ default: false })
  public reciveNotificationOnNewTeamPartner: boolean;

  @Column({ default: false })
  public reciveNotificationOnNewPartnerInvestment: boolean;

  @Column({ default: false })
  public reciveNotificationOnNewTeamPartnerInvestment: boolean;

  @Column({ default: false })
  public reciveNotificationsEveryWeek: boolean;

  @Column({ default: false })
  public reciveNotificationsEveryMonth: boolean;

  @Column({ default: '' })
  public contactEmail: string;

  @Column({ unique: true, })
  public email: string;

  @Column({ default: false, })
  public registrationComplete: boolean;

  @Column()
  public birthDate : string;

  @Column({ 
    default: 'en',
    enum: ['en', 'ru', 'ua'],
  })
  public language: string;

  @Column({
    enum: ['local', 'facebook', 'google'],
  })
  public registrationType: string;

  @Column({
    enum: ['user', 'manager', 'admin'],
    default: 'user',
  })
  public roles: string;

  @Column({
    default: false,
  })
  public receiveNotifications: boolean;

  @OneToOne(type => UserBalance, balance => balance.id)
  public balance: UserBalance;

  @OneToOne(type => UserEarnings, type => type.id)
  public earnings: UserEarnings;

  /**
   * Initialize user with email, pass, regtype
   * @param {string} email
   * @param {string} password
   * @param {string} registrationType
   * @returns {User}
   */
  public static create(
    email: string,
    password: string,
    registrationType: string,
  ): User {
    const user = new User();
    user.email = email;
    user.password = password;
    user.registrationType = registrationType;
    return user;
  }

  /**
   * Actual encryption
   * @param {string} password
   * @returns {PromiseLike<string>}
   */
  public async encryptPassword(password): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  /**
   * Compare exist password and passed
   * @param {string} newPassword
   * @returns {Promise<any>}
   */
  public async comparePassword(newPassword: string) {
    try {
      return await bcrypt.compareSync(newPassword, this.password);
    } catch (error) {
      return error;
    }
  }

  /**
   * Encrypts user password after register
   * @param instance
   * @returns {any}
   */
  @BeforeInsert()
  public async encrypt() {
    try {
      await this.encryptPassword(this.password);
    } catch (error) {
      return error;
    }
  }
}
