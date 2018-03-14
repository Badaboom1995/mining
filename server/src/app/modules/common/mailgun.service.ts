import { Component } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as mg from 'nodemailer-mailgun-transport';
import { ForgetPasswordDto } from '../account/dto/account.dto';

import {
  MAILGUN_API_KEY,
  MAILGUN_EMAIL_DOMAIN,
  SITE_URL,
  SITENAME_BASE,
  NODE_ENV,
} from '../../../config';

//TODO: Получать html template из файлов
@Component()
export class MailgunService {
  private nodemailerMailgun = nodemailer.createTransport(
    mg({
      auth: {
        api_key: MAILGUN_API_KEY,
        domain: MAILGUN_EMAIL_DOMAIN,
      },
    }),
  );

  async sendEmail(email, html) {
    try {
      if (NODE_ENV === 'production') {
        await this.nodemailerMailgun.sendMail({
          to: email,
          from: `noreply@${MAILGUN_EMAIL_DOMAIN}`,
          subject: `Password Reset Request for ${SITENAME_BASE}`,
          html,
        });
      } else {
        console.log('Send email: ', html);
      }
      return Promise.resolve();
    } catch (err) {
      return Promise.reject('Error when we try to send email');
    }
  }

  async sendPasswordResetEmail(email: ForgetPasswordDto, token: string): Promise<any> {
    try {
      const html = `
    	<div>
        <h3>Dear, user</h3>
        <p>You requested for a password reset, kindly use this
        <a href="${SITE_URL}/account/reset-password/?token=${token}">
    			link
    		</a>to reset your password</p>
        <br>
        <p>Cheers!</p>
      </div>
    	`;
      await this.sendEmail(email, html);
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(
        `There was a problem when we try to send reset password email`,
      );
    }
  }
}
