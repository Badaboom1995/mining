import { Component, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Users, IUserModel } from '../schemas/user.schema';
import * as passport from 'passport';
import { Strategy } from 'passport-local';
import { AccountService } from '../services/account.service';

@Component()
export class LocalLoginStrategy extends Strategy {
  constructor(private readonly accountService: AccountService) {
    super(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => await this.logIn(email, password, done),
    );

    passport.use('local-login', this);

    passport.serializeUser((user: any, done) => {
      done(null, user._id);
    });

    passport.deserializeUser(async (_id, done) => {
      try {
        const user = await Users.findOne({_id});
        if (user) {
          return done(null, user);
        }
      } catch {
        return done(null, false);
      }
    });
  }

  async logIn(email, password, done) {
    const user: IUserModel = await this.accountService.findByEmail(email);
    if (!user) {
      return done(
        new HttpException(
          { success: false, message: 'Invalid credentials' },
          HttpStatus.UNAUTHORIZED,
        ),
        false,
      );
    }

    const isMatch: boolean = await user.comparePassword(password);
    if (!isMatch) {
      return done(
        new HttpException(
          { success: false, message: 'Invalid credentials' },
          HttpStatus.UNAUTHORIZED,
        ),
        false,
      );
    }
    return done(null, user);
  }
}
