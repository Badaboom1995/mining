import * as AWS from 'aws-sdk';
import {
  AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  AWS_PLATFORM_APPLICATION_ARN,
} from '../../../config/environments.config';

export default class AWSService {
  SNS: any;
  deviceId: string;
  platform: string;
  message: string;

  constructor(options) {
    this.deviceId = options.deviceId;
    this.platform = options.platform;
    this.message = options.message;

    AWS.config.update({
      accessKeyId: AWS_ACCESS_KEY,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      region: AWS_REGION,
    });
  }

  public async registerDeviceEndpoint() {
    this.SNS = new AWS.SNS();
    return await this.SNS.createPlatformEndpoint(
      {
        Token: this.deviceId,
        PlatformApplicationArn: AWS_PLATFORM_APPLICATION_ARN[this.platform],
      },
      (err, data) => {
        if (err) {
          return Promise.reject(err);
        }

        let payload: any = {
          default: this.message,
          APNS: {
            aps: {
              alert: this.message,
              sound: 'default',
              badge: 1,
            },
          },
        };
        payload.APNS = JSON.stringify(payload.APNS);
        payload = JSON.stringify(payload);

        this.pushNotification(payload, data.EndpointArn);
      },
    );
  }

  private async pushNotification(payload, endpointArn) {
    await this.SNS.publish(
      {
        Message: payload,
        TargetArn: endpointArn,
        MessageStructure: 'json',
      },
      (err, data) => {
        if (err) {
          return Promise.reject(err);
        }
        return Promise.resolve(data);
      },
    );
  }
}
