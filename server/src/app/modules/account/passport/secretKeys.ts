import { Component } from '@nestjs/common';

@Component()
export class SecretKey {
  googleClientID: string;
  googleClientSecret: string;

  facebookClientId: string;
  facebookClientSecret: string;

  constructor() {
    this.googleClientID = '842483308455-4qhu04h48pu19oon12mfhvhrk60p1hse.apps.googleusercontent.com';
    this.googleClientSecret = 'St8-evckOlbu3r2iSW-kKWjR';

    this.facebookClientId = '563793287308508';
    this.facebookClientSecret = '20d1d95afaadac11bbd428d4236b4b21';
  }

  getGoogleKeys(): any {
    return {
      clientID: this.googleClientID,
      clientSecret: this.googleClientSecret
    };
  }

  getFacebookKeys(): any {
    return {
      clientID: this.facebookClientId,
      clientSecret: this.facebookClientSecret
    };
  }
}
