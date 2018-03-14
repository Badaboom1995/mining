export interface User {
  readonly displayName: string;
  readonly email?: string;
  readonly passwordResetToken?: string;
  readonly passwordResetExpires?: Date;
  password?: string;

  readonly googleAccount?: Google;
  readonly facebookAccount?: Facebook;
}

interface Google {
  readonly id: string;
  readonly token: string;
  readonly photo: string;
}

interface Facebook {
  readonly id: string;
  readonly token: string;
  readonly photo: string;
  readonly profileUrl: string;
}
