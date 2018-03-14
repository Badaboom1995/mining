import { Component, HttpException, HttpStatus } from '@nestjs/common';
import { SecretKey } from './secretKeys';
import { Users, IUserModel } from '../schemas/user.schema';
import * as passport from 'passport';
import { Strategy } from 'passport-facebook';

@Component()
export class FacebookStrategy extends Strategy {
  constructor(private secretKey: SecretKey) {
    super(
      {
        clientID: secretKey.getFacebookKeys().clientID,
        clientSecret: secretKey.getFacebookKeys().clientSecret,
        callbackURL: '/account/facebook/callback',
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

    passport.use('facebook-login', this);

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
        'facebookAccount.id': profile.id,
      });
      if (!existUser) {
        const newUser: IUserModel = new Users({
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          secondName: profile.name.secondName,
          email: profile.emails && profile.emails[0].value,
          photo: profile.photos && profile.photos[0].value,
          facebookAccount: {
            id: profile.id,
            token: accessToken,
            profileUrl: profile.profileUrl,
            displayName: profile.displayName,
          },
          registrationType: 'facebook',
        });
        newUser.save();
        return done(null, newUser);
      }
      return done(null, existUser);
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
