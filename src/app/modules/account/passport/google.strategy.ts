import {Component, HttpException, HttpStatus} from '@nestjs/common';
import {SecretKey} from './secretKeys';
import {Users, IUserModel} from '../schemas/user.schema';

import * as passport from 'passport';
import {OAuth2Strategy} from 'passport-google-oauth';
import {AccountService} from '../services/account.service';

@Component()
export class GoogleStrategy extends OAuth2Strategy {
  constructor(private secretKey: SecretKey,
              private readonly accountService: AccountService,) {
    super(
      {
        clientID: secretKey.getGoogleKeys().clientID,
        clientSecret: secretKey.getGoogleKeys().clientSecret,
        callbackURL: '/account/google/callback',
        passReqToCallback: true,
      },
      async (req, accessToken, refreshToken, profile, done) => {
        await this.logIn(req, profile, accessToken, done);
      },
    );

    passport.use('google-login', this);
    passport.serializeUser((user: any, done) => {
      done(null, user);
    });
    passport.deserializeUser((user, done) => {
      done(null, user);
    });
  }

  async logIn(req, profile, accessToken, done) {
    try {
      const existUser: IUserModel = await Users.findOne({
        email: profile.emails[0].value,
      });
      if (!existUser) {
        const newUser: IUserModel = new Users({
          firstName: profile.givenName,
          lastName: profile.familyName,
          email: profile.emails[0].value,
          photo: profile.photos && profile.photos[0].value,
          googleAccount: {
            id: profile.id,
            token: accessToken,
            displayName: profile.displayName,
          },
          registrationType: 'google',
          language: profile.language,
        });
        newUser.save();
        return done(null, newUser);
      }
      return done(null, existUser);
    } catch (err) {
      return done(
        new HttpException(
          {success: false, message: 'There was a problem logging in'},
          HttpStatus.UNAUTHORIZED,
        ),
        false,
      );
    }
  }
}
