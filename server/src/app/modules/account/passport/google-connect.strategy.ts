import { Component, HttpException, HttpStatus } from '@nestjs/common';
import { SecretKey } from './secretKeys';
import { Users, IUserModel } from '../schemas/user.schema';

import * as passport from 'passport';
import { OAuth2Strategy } from 'passport-google-oauth';

@Component()
export class GoogleStrategyConnect extends OAuth2Strategy {
  constructor(private secretKey: SecretKey) {
    super(
      {
        clientID: secretKey.getGoogleKeys().clientID,
        clientSecret: secretKey.getGoogleKeys().clientSecret,
        callbackURL: '/account/connect/google/callback',
        passReqToCallback: true,
      },
      async (req, accessToken, refreshToken, profile, done) => {
        await this.logIn(req, profile, accessToken, done);
      },
    );

    passport.use('google-connect', this);
    passport.serializeUser((user: any, done) => {
      done(null, user);
    });
    passport.deserializeUser((user, done) => {
      done(null, user);
    });
  }

  async logIn(req, profile, accessToken, done) {
    try {
      const user = await Users.findOneAndUpdate(
        { _id: req.user.id },
        {
          googleAccount: {
            id: profile.id,
            token: accessToken,
            displayName: profile.displayName,
          },
        },
      );
      return done(null, user);
    } catch (err) {
      return done(
        new HttpException(
          { success: false, message: 'There was a problem logging in' },
          HttpStatus.UNAUTHORIZED,
        ),
        false,
      );
    }
  }
}
