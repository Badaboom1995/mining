import { Component, HttpException, HttpStatus } from '@nestjs/common';
import { SecretKey } from './secretKeys';
import { Users, IUserModel } from '../schemas/user.schema';
import * as passport from 'passport';
import { Strategy } from 'passport-facebook';

@Component()
export class FacebookStrategyConnect extends Strategy {
  constructor(private secretKey: SecretKey) {
    super(
      {
        clientID: secretKey.getFacebookKeys().clientID,
        clientSecret: secretKey.getFacebookKeys().clientSecret,
        callbackURL: '/account/connect/facebook/callback',
        profileFields: [
          'id',
          'displayName',
          'email',
          'first_name',
          'middle_name',
          'last_name',
          'link',
          'photos',
        ],
        enableProof: true,
        passReqToCallback: true,
      },
      async (req, accessToken, refreshToken, profile, done) => {
        await this.logIn(req, profile, accessToken, done);
      },
    );

    passport.use('facebook-connect', this);

    passport.serializeUser((user: any, done) => {
      done(null, user);
    });
    passport.deserializeUser((user, done) => {
      done(null, user);
    });
  }

  async logIn(req, profile, accessToken, done) {
    try {
      if (req.user) {
        const user = await Users.findOneAndUpdate(
          { _id: req.user.id },
          {
            facebookAccount: {
              id: profile.id,
              token: accessToken,
              profileUrl: profile.profileUrl,
              displayName: profile.displayName,
            },
          },
        );
        return done(null, user);
      }
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
