import { Component, Inject } from '@nestjs/common';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import * as passport from 'passport';
import { Strategy } from 'passport-local';
import { AccountService } from '../services';
import { User } from "../../../entity/user.entity";

@Component()
export class LocalRegisterStrategy extends Strategy {
  constructor(@InjectRepository(User) private userRepository : Repository<User>, private readonly accountService: AccountService) {
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

    passport.deserializeUser(async (id, done) => {
      try {
        const user : User = await this.userRepository.findOneById(id);
        if (user) {
          return done(null, user);
        }
      } catch {
        return done(null, false);
      }
    });
  }
}
