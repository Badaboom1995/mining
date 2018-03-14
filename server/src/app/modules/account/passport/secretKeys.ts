import { Component } from '@nestjs/common';

@Component()
export class SecretKey {
  googleClientID: string;
  googleClientSecret: string;

  githubClientId: string;
  githubClientSecret: string;

  facebookClientId: string;
  facebookClientSecret: string;

  constructor() {
    this.googleClientID = '842483308455-4qhu04h48pu19oon12mfhvhrk60p1hse.apps.googleusercontent.com';
    this.googleClientSecret = 'St8-evckOlbu3r2iSW-kKWjR';

    this.githubClientId = '1fc4adf567db42715313';
    this.githubClientSecret = '55efa44dd7230fdc05e14e3cb283dd231a2977a8';

    this.facebookClientId = '563793287308508';
    this.facebookClientSecret = '20d1d95afaadac11bbd428d4236b4b21';
  }

  getGoogleKeys(): any {
    return {
      clientID: this.googleClientID,
      clientSecret: this.googleClientSecret
    };
  }

  getGithubKeys(): any {
    return {
      clientID: this.githubClientId,
      clientSecret: this.githubClientSecret
    };
  }

  getFacebookKeys(): any {
    return {
      clientID: this.facebookClientId,
      clientSecret: this.facebookClientSecret
    };
  }
}
