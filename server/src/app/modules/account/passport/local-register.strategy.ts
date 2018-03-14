import { Component, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Users, IUserModel } from '../schemas/user.schema';

import * as passport from 'passport';
import { Strategy } from 'passport-local';
import { AccountService } from '../services/account.service';
import { LoginUserDto } from '../dto/account.dto';

@Component()
export class LocalRegisterStrategy extends Strategy {
  constructor(private readonly accountService: AccountService) {
    super(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) =>
        await this.accountService.localRegister({ email, password }, done),
    );

    passport.use('local-register', this);

    passport.serializeUser((user: any, done) => {
      done(null, user._id);
    });

    passport.deserializeUser(async (_id, done) => {
      try {
        const user = await Users.findOne({ _id });
        if (user) {
          return done(null, user);
        }
      } catch {
        return done(null, false);
      }
    });
  }
}
