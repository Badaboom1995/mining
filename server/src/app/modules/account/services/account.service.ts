import { Component, Inject } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../entity/user.entity';
import {
  ChangePasswordDto,
  ForgetPasswordDto,
  LoginUserDto,
  ResetPasswordDto,
} from '../dto/account.dto';
import { APIError } from "../../../helpers";


@Component()
export class AccountService {
  constructor(@InjectRepository(User) private userRepository : Repository<User>) {}
  /***
   * Local registration with user save if email not used
   * @param {string} email
   * @param {string} password
   * @param done
   * @returns {Promise<any>}
   */
  public async localRegister({ email, password } : LoginUserDto, done) : Promise<any> {
    try {
      const user = await this.userRepository.findOne({ email });
      if (user) {
        return done(
          new APIError('User already exists')
        );
      }
      const newUser = User.create(email, password, 'local');
      await this.userRepository.save(newUser);
      return done(null, newUser);
    } catch (err) {
      return done(
        new APIError('Registration error')
      );
    }
  }

  /**
   * Update user profile (if user exists ) with new data
   * @param {string} id
   * @param data
   * @returns {Promise<void>}
   */
  public async updateProfile(id : string, data : any) : Promise<void> {
    try {
      const user : any = await this.findById( id );
      return await user.updateById({ id }, data);
    } catch (err) {
      return Promise.reject(
        'There was a problem when we try to save user data after registation',
      );
    }
  }

  /**
   * Update user avatar with new url
   * @param {string} id
   * @param {string} photo
   * @returns {Promise<any>}
   */
  public async updateProfileAvatar(id : string, photo : string) {
    try {
      const user : any = await this.findById( id );
      return await user.updateById(id, { photo });
    } catch (err) {
      return Promise.reject(
        `${err} There was a problem when we try to save user image`,
      );
    }
  }


  public async forgotPassword(data : ForgetPasswordDto) : Promise<string> {
    try {
      const { email } = data;
      await this.findByEmail(email);
      const generateToken = await randomBytes(20).toString('hex');
      await this.userRepository.update(
        { email },
        {
          passwordResetToken: generateToken,
          passwordResetExpires: Date.now() + 3600000,
        },
      );
      return generateToken;
    } catch (err) {
      return Promise.reject(
        `There was a problem when we try to reset password`,
      );
    }
  }

  /**
   * Find user by reset token if token exists and not expired
   * @param {string} token
   * @returns {Promise<any>}
   */
  public async findUserByResetToken(token : string) : Promise<any> {
    try {
      if (!token) {
        return Promise.reject('Missing reset password token');
      }
      const user : any = await this.userRepository.findOne({
        passwordResetToken: token,
        passwordResetExpires: Date.now()
      });
      if (!user) {
        return Promise.reject('Password reset token is invalid or has expired.',);
      }
      return user;
    } catch (err) {
      return Promise.reject('There was a problem when we try to reset password');
    }
  }

  /**
   * Change password if reset token exists
   * @param {ResetPasswordDto} data
   * @returns {Promise<void>}
   */
  public async resetPassword(data : ResetPasswordDto) : Promise<void> {
    try {
      if (!data.password) return Promise.reject('No password');
      const user : User = await this.findUserByResetToken(data.token);
      await user.resetPassword(data.password);
    } catch (err) {
      return Promise.reject(
        'There was a problem when we try to reset password',
      );
    }
  }

  /**
   * Change user password
   * @param {ChangePasswordDto} data
   * @param id
   * @returns {Promise<void>}
   */
  async changePassword(data : ChangePasswordDto, id) : Promise<void> {
    try {
      const user = await this.findById(id);
      const isValid = await user.comparePassword(data.oldPassword);
      if (!isValid) return Promise.reject('Wrong password');
      await user.encryptPassword(data.newPassword);
    } catch (err) {
      return Promise.reject(err);
    }
  }


  /**
   * Get user by email
   * @param {string} email
   * @returns {Promise<User | undefined>}
   */
  public async findByEmail(email : string) : Promise<User>{
    try {
      const user : User = await this.userRepository.findOne({ email: email.toLowerCase() });
      if (!user) return Promise.reject('User not found');
      return user;
    } catch (err) {
      return Promise.reject('Unhandled error');
    }
  }

  /**
   * Get user by id
   * @param {string} id
   * @returns {Promise<any>}
   */
  public async findById(id : string) : Promise<User> {
    try {
      const user : User = await this.userRepository.findOneById(id);
      if (!user) return Promise.reject('User not found');
      return user;
    } catch (err) {
      return Promise.reject('Unhandled error');
    }
  }

  /**
   * Return all users
   * @returns {Promise<User[]>}
   */
  public async findAllUsers() : Promise<User[]> {
    try {
      return await this.userRepository.find();
    } catch (err) {
      return Promise.reject("Can't get users list");
    }
  }
}
