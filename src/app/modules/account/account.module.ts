import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod,
} from '@nestjs/common';

import * as passport from 'passport';
import { AccountController } from './controllers';
import {
  GoogleStrategy,
  GoogleStrategyConnect,
  FacebookStrategy,
  FacebookStrategyConnect,
  LocalLoginStrategy,
  LocalRegisterStrategy,
} from './passport';
import { SecretKey } from './passport/secretKeys';
import { AccountService } from './services';
import { IsAuthenticated } from './middlewares';
import { MailgunService } from '../common/mailgun.service';
import { ImageUploadMiddleware } from './middlewares';

@Module({
  controllers: [AccountController],
  components: [
    GoogleStrategy,
    GoogleStrategyConnect,
    FacebookStrategy,
    FacebookStrategyConnect,
    LocalLoginStrategy,
    LocalRegisterStrategy,
    IsAuthenticated,
    SecretKey,
    AccountService,
    MailgunService,
  ],
})
export class AccountModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {
    // JWT verification
    consumer
      .apply(IsAuthenticated)
      .forRoutes(
        { path: '/contacts/*', method: RequestMethod.ALL },
        { path: '/notifications/*', method: RequestMethod.ALL },
        { path: '/investment/*', method: RequestMethod.ALL },
        { path: '/account/profile', method: RequestMethod.ALL },
        { path: '/account/settings', method: RequestMethod.ALL },
        { path: '/account/settings/*', method: RequestMethod.ALL },
        { path: '/account/unlink', method: RequestMethod.ALL },
        { path: '/account/change-password', method: RequestMethod.ALL },
        { path: '/account/connect/google', method: RequestMethod.ALL },
        { path: '/account/connect/facebook', method: RequestMethod.ALL },
        { path: '/account/connect/google/callback', method: RequestMethod.ALL },
        { path: '/account/connect/facebook/callback', method: RequestMethod.ALL },
      );

    // Upload image middleware
    consumer
      .apply([ImageUploadMiddleware]).forRoutes({
      method: RequestMethod.POST,
      path: '/account/settings/avatar',
    });

    // Google oAuth
    consumer
      .apply(
        passport.authenticate('google-login', {
          scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
          ],
        }),
      )
      .forRoutes({ path: '/account/google', method: RequestMethod.GET })
      .apply(
        passport.authenticate('google-login', {
          successRedirect: '/account/callback?oauth="true"',
        }),
      )
      .forRoutes({
        path: '/account/google/callback',
        method: RequestMethod.GET,
      });

    consumer
      .apply(
        passport.authenticate('google-connect', {
          scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
          ],
        }),
      )
      .forRoutes({ path: '/account/connect/google', method: RequestMethod.GET })
      .apply(
        passport.authenticate('google-connect', {
          successRedirect: '/account/connect/callback',

        }),
      )
      .forRoutes({
        path: '/account/connect/google/callback',
        method: RequestMethod.GET,
      });

    // Facebook oAuth
    consumer
      .apply(
        passport.authenticate('facebook-login', {
          scope: ['email', 'public_profile'],
        }),
      )
      .forRoutes({ path: '/account/facebook', method: RequestMethod.ALL })
      .apply(
        passport.authenticate('facebook-login', {
          successRedirect: '/account/callback?oauth="true"',
        }),
      )
      .forRoutes({
        path: '/account/facebook/callback',
        method: RequestMethod.ALL,
      });

    consumer
      .apply(
        passport.authenticate('facebook-connect', {
          scope: ['email', 'public_profile'],
        }),
      )
      .forRoutes({ path: '/account/connect/facebook', method: RequestMethod.ALL })
      .apply(
        passport.authenticate('facebook-connect', {
          successRedirect: '/account/connect/callback',
        }),
      )
      .forRoutes({
        path: '/account/connect/facebook/callback',
        method: RequestMethod.ALL,
      });

    // Local login
    consumer
      .apply(
        passport.authenticate('local-login', {
          successRedirect: '/account/callback',
        }),
      )
      .forRoutes({ path: '/account/login', method: RequestMethod.POST });

    // Local register
    consumer
      .apply(
        passport.authenticate('local-register', {
          successRedirect: '/account/callback',
        }),
      )
      .forRoutes({ path: '/account/register', method: RequestMethod.POST });

  }
}
