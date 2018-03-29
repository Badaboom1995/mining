import { Component, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import * as passport from 'passport';
import { Strategy } from 'passport-local';
import { User } from "../../../entity/user.entity";
import { AccountService } from '../services/index';


@Component()
export class LocalLoginStrategy extends Strategy {
  constructor(
     @InjectRepository(User) private userRepository : Repository<User>,
     private accountService : AccountService
  ) {
    super(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,

      },
      async (req, email, password, done) => {
        await this.logIn(email, password, done);
      }
    );

    passport.use('local-login', this);

    passport.serializeUser((user : any, done) => {
      console.log(user, 'SERIALIZE');
      done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
      console.log(id, 'DESERIALIZE');
      try {
        const user : User = await this.accountService.findById(id as string);
        return done(null, user || false);
      } catch {
        return done(null, false);
      }
    });
  }

  async logIn(email, password, done) {
    const user : User = await this.accountService.findByEmail(email);
    if (!user) {
      return done(
        new HttpException('Invalid credentials',
          HttpStatus.UNAUTHORIZED,
        ),
        false,
      );
    }
    const isMatch : boolean = await user.comparePassword(password);
    
    if (!isMatch) {
      return done(
        new HttpException( 'Invalid credentials',
          HttpStatus.UNAUTHORIZED,
        ),
        false,
      );
    }
    return done(null, user);
  }
}
