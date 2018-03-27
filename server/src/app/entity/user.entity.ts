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
  public constructor(@Column() public userId: string) {
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
  public constructor(@Column() public userId: string) {
    // this.userId = userId;
  }

  @ObjectIdColumn() public id: string;

  @Column() public eth: number;

  @Column() public zcash: number;
}

@Entity('users')
export class User {
  @ObjectIdColumn() public id: string;

  @Column() public nickname: string;

  @Column() public firstName: string;

  @Column() public secondName: string;

  @Column() public skype: string;

  @Column() public phone: string;

  @Column() public companyUrl: string;

  @Column() public companyName: string;

  @Column() public position: string;

  @Column() public photo: string;

  @Column() public invitedBy: string;

  @Column() public password: string;

  @Column() public passwordResetToken: string;

  @Column() public passwordResetExpires: Date;

  @Column() public referrals: string[];


  @Column() public bitcoin: string;

  @Column() public advcash: string;

  @Column() public privat24: string;

  @Column() public eth: string;

  @Column() public visa: string;


  @Column() public reciveNotificationOnNewPartner: boolean;

  @Column() public reciveNotificationOnNewTeamPartner: boolean;

  @Column() public reciveNotificationOnNewPartnerInvestment: boolean;

  @Column() public reciveNotificationOnNewTeamPartnerInvestment: boolean;

  @Column() public reciveNotificationsEveryWeek: boolean;

  @Column() public reciveNotificationsEveryMonth: boolean;

  @Column()
  public contactEmail: string;

  @Column({
    unique: true,
  })
  public email: string;

  @Column({
    default: false,
  })
  public registrationComplete: boolean;

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
  public async encryptPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  /**
   * Set new password, add remove resetPasswordToken, and passwordResetExpires
   * @param password
   * @returns {Promise<void>}
   */
  public async resetPassword(password) {
    await this.encryptPassword(this.password);
    this.passwordResetToken = undefined;
    this.passwordResetExpires = undefined;
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
