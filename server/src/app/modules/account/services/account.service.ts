import { sign } from 'jsonwebtoken';
import { Component, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { randomBytes } from 'crypto';
import * as bcrypt from 'bcrypt-nodejs';
import * as Promisify from 'bluebird';

const bcryptAsync: any = Promisify.promisifyAll(bcrypt);
import { Users, IUserModel } from '../schemas/user.schema';
import {
  ChangePasswordDto,
  ForgetPasswordDto,
  LoginUserDto,
  ResetPasswordDto,
  UnlinkDto,
} from '../dto/account.dto';
import { JWT_SECRET } from '../../../config/config';
import {PrivateProfileModel, ProfileModel} from '../../../models/profile-model';

@Component()
export class AccountService {
  async createToken(_id: number | string, email: string) {
    const expiresIn = '48h';
    const secretOrKey = JWT_SECRET;
    const user = { _id, email };
    const token = await sign(user, secretOrKey, { expiresIn });
    return {
      expiresIn,
      token,
    };
  }

  async localRegister(payload: LoginUserDto, done): Promise<any> {
    try {
      let user = await this.findByEmail(payload.email);
      if (!user) {
        const newUser: IUserModel = new Users({
          email: payload.email,
          password: payload.password,
          registrationType: 'local',
        });

        await newUser.save();
        return done(null, newUser);
      } else {
        return done(
          new HttpException(
            { success: false, message: 'User already exists' },
            HttpStatus.UNAUTHORIZED,
          ),
          false,
        );
      }
    } catch (err) {
      return done(
        new HttpException(
          { success: false, message: 'Registration error' },
          HttpStatus.UNAUTHORIZED,
        ),
        false,
      );
    }
  }

  async updateProfile(id: string, data: any): Promise<void> {
    try {
      const user: any = await Users.findOne({ _id: id });
      if (!user) {
        return Promise.reject('User has been not found');
      }
      await Users.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            skype: data.skype,
            companyUrl: data.companyUrl,
            companyName: data.companyName,
            position: data.position,
            phone: data.phone,
            firstName: data.firstName,
            secondName: data.secondName,
            lastName: data.lastName,
            reciveNotifications: data.reciveNotifications,
            contactEmail: data.contactEmail
          },
        },
        { upsert: true },
      );
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(
        'There was a problem when we try to save user data after registation',
      );
    }
  }

  async updateProfileAvatar(id: string, photo: string): Promise<IUserModel> {
    try {
      console.log('photo', photo);
      const user: any = await Users.findOne({ _id: id });
      if (!user) {
        return Promise.reject('User has been not found');
      }
      const update = await Users.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            photo,
          },
        },
        { upsert: true },
      );
      return Promise.resolve(update);
    } catch (err) {
      return Promise.reject(
        `${err} There was a problem when we try to save user image`,
      );
    }
  }
  async forgotPassword(data: ForgetPasswordDto): Promise<string> {
    try {
      const { email } = data;
      const user: any = await Users.findOne({ email: email });
      if (!user) {
        return Promise.reject('User has been not found');
      }
      const generateToken = await randomBytes(20).toString('hex');
      await Users.findOneAndUpdate(
        { email: email },
        {
          $set: {
            passwordResetToken: generateToken,
            passwordResetExpires: Date.now() + 3600000,
          },
        },
        { upsert: true },
      );
      return Promise.resolve(generateToken);
    } catch (err) {
      return Promise.reject(
        `There was a problem when we try to reset password`,
      );
    }
  }

  async findUserByResetToken(token: string): Promise<any> {
    try {
      if (!token) {
        return Promise.reject('Missing reset password token');
      }
      const user: any = await Users.findOne({
        passwordResetToken: token,
        passwordResetExpires: { $gt: Date.now() },
      });
      if (!user) {
        return Promise.reject(
          'Password reset token is invalid or has expired.',
        );
      }
      return Promise.resolve(user);
    } catch (err) {
      return Promise.reject(
        'There was a problem when we try to reset password',
      );
    }
  }

  async resetPassword(data: ResetPasswordDto): Promise<void> {
    try {
      if (!data.password) {
        return Promise.reject('Missing new password');
      }
      let user = await this.findUserByResetToken(data.token);
      user.password = data.password;
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save();
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(
        'There was a problem when we try to reset password',
      );
    }
  }

  async unLinkAccount(data: UnlinkDto, id): Promise<void> {
    try {
      const { type } = data;
      const user: any = await Users.findOne({ _id: id });
      if (!user) {
        return Promise.reject('User has been not found');
      }
      if (user.registrationType === type) {
        return Promise.reject('You cant remove your main authorization type');
      }
      const template = `${type}Account`;
      await Users.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            [template]: undefined,
          },
        },
        { upsert: true },
      );
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(
        `There was a problem when we try to unlink account`,
      );
    }
  }

  async changePassword(data: ChangePasswordDto, id) {
    try {
      let user = await Users.findOne({ _id: id });
      const isValid = await bcryptAsync.compareAsync(
        data.oldPassword,
        user.password,
      );
      if (!isValid) return Promise.reject('Wrong password');
      user.password = data.newPassword;
      await user.save();
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async findByEmail(email: string): Promise<IUserModel> {
    return await Users.findOne({ email: email.toLowerCase() });
  }

  async findById(id: string): Promise<IUserModel> {
    try {
      let user: any = await Users.findOne(
        { _id: id },
        {
          password: 0,
          passwordResetToken: 0,
          passwordResetExpires: 0,
          'googleAccount.token': 0,
          'facebookAccount.token': 0,
          registrationComplete: 0,
          __v: 0,
          updatedAt: 0
        },
      );
      if (user) {
        const contactsCount = user.contacts.length;
        const lastContactsId = user.contacts.slice(0,4);
        const lastContactsData = Promise.all(
          lastContactsId.map(async e => {
            const contact = await Users.findOne({_id: e});
            return new PrivateProfileModel(contact).user;
          }),
        );
        user.contactsCount = contactsCount;
        user.lastContacts = await lastContactsData;
        return Promise.resolve(user);
      } else {
        return Promise.reject('User not found');
      }
    } catch (err) {
      return Promise.reject('Unhadled error');
    }
  }
}
