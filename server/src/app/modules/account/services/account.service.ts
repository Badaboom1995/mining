import { Component, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { randomBytes } from 'crypto';
import { User, UserBalance } from '../../../entity/user.entity';
import {
  ChangePasswordDto,
  ForgetPasswordDto,
  LoginUserDto,
  ResetPasswordDto,
  UpdateProfileDto,
} from '../dto/account.dto';
import { APIError } from '../../../helpers';
import { MongoRepository } from 'typeorm/repository/MongoRepository';
import { mergeByKeys } from '../../../../utils/merge-by-keys';
import { SessionUser } from '../../common/decorators/user.decorator';

@Component()
export class AccountService {
  constructor(
    @InjectRepository(User) private userRepository : Repository<User>,
    @InjectRepository(User) private userBalanceRepository : Repository<UserBalance>,
    
  ) {}

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
          new HttpException('User already exists', HttpStatus.UNAUTHORIZED),
          false,
        );
      }
      const newUser = User.create(email, password, 'local');
      newUser.password = await newUser.encryptPassword(newUser.password);
      await this.userRepository.save(newUser);
      return done(null, newUser);
    } catch (err) {
      return done(
        new HttpException(
          'There was a problem when we try to register new user',
          HttpStatus.UNAUTHORIZED,
        ),
        false,
      );
    }
  }

  /**
   * Update user profile (if user exists ) with new data
   * @param {string} id
   * @param data
   * @returns {Promise<void>}
   */
  public async updateProfile(id : string, data : UpdateProfileDto) : Promise<any> {
    try {
      const user = await this.findById(id);
      mergeByKeys(user, data)
      await this.userRepository.save(user);
    } catch (err) {
      return Promise.reject(
        'There was a problem when we try to save user data after registration',
      );
    }
  }

  /**
   * Update user avatar with new url
   * @param {string} id
   * @param {string} photo
   * @returns {Promise<any>}
   */
  public async updateProfileAvatar(id : string, photo : string) : Promise<void> {
    try {
      const user = await this.findById(id);
      user.photo = photo;
      await this.userRepository.save(user);
    } catch (err) {
      return Promise.reject(
        `There was a problem when we try to save user image`,
      );
    }
  }

  public async forgotPassword(data : ForgetPasswordDto) : Promise<string> {
    try {
      const { email } = data;
      const user = await this.findByEmail(email);
      const generateToken = await randomBytes(20).toString('hex');
      user.passwordResetToken = generateToken;
      user.passwordResetExpires = Date.now() + 3600000;
      await this.userRepository.save(user);
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
        passwordResetExpires: Date.now(),
      });
      if (!user) {
        return Promise.reject(
          'Password reset token is invalid or has expired.',
        );
      }
      return user;
    } catch (err) {
      return Promise.reject(
        'There was a problem when we try to reset password',
      );
    }
  }

  /**
   * Change password if reset token exists
   * @param {ResetPasswordDto} data
   * @returns {Promise<void>}
   */
  public async resetPassword(data : ResetPasswordDto) : Promise<void> {
    try {
      const { password, token } = data;
      const user = await this.findUserByResetToken(token);
      user.password = await user.encryptPassword(password);
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.resetPassword(password);
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
      user.password = await user.encryptPassword(data.newPassword);
      await this.userRepository.save(user);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  /**
   * Get user by email
   * @param {string} email
   * @returns {Promise<User | undefined>}
   */
  public async findByEmail(email : string) : Promise<User> {
    try {
      const user : User = await this.userRepository.findOne({
        email: email.toLowerCase(),
      });
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
  /**
   * Get user balance by id
   * @memberof AccountService
   */
  public async getBalances(userId : any) : Promise<UserBalance> {
    const balance =  await this.userBalanceRepository.findOne({ where: { userId }});
    return balance;
  }


}
