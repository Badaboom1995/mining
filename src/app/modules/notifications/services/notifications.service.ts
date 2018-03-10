import { Component, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from '../../account/schemas/user.schema';
import { AccountService } from '../../account/services';
import { NotificationProfileModel } from '../../../models/profile-model';
import { Notification, NotificationsShema } from '../schemas';
import {
  ConnectDeviceDto,
  DismissNotificationDto,
  SendNotificationDto,
} from '../dto/notification.dto';
import AWSService from './aws.service';
import { AddContactDto } from '../../contacts/dto/contacts.dto';

@Component()
export class NotificationsService {
  constructor(
    @InjectModel(NotificationsShema)
    private readonly notificationModel: Model<Notification>,
    private readonly accountService: AccountService,
  ) {}

  async insertNotification(senderId: string, recipient: AddContactDto) {
    try {
      const notification = new this.notificationModel({
        senderId: senderId,
        recipientId: recipient.id,
      });
      await notification.save();
      const { deviceInstance } = await Users.findOne({ _id: recipient.id });
      const { firstName, lastName } = await Users.findOne({ _id: senderId });
      if (deviceInstance) {
        const options = {
          deviceId: deviceInstance.token,
          platform: deviceInstance.platform,
          message: `${firstName} ${lastName} has added you to his contacts`,
        };
        await new AWSService(options).registerDeviceEndpoint();
      }
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(
        `There was a problem when we try to send notification`,
      );
    }
  }

  async dismissNotification(notificationId: DismissNotificationDto) {
    try {
      const notification: any = await this.notificationModel.findOne({
        _id: notificationId.id,
      });
      if (!notification) {
        return Promise.reject('Notification has been not found');
      }
      await this.notificationModel.deleteOne({ _id: notificationId.id });
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(
        `${err} There was a problem when we try to dismiss notification`,
      );
    }
  }

  async getNotificationsList(userId: string) {
    try {
      const notifications: any = await this.notificationModel.find({
        senderId: userId,
      });
      const data = await Promise.all(
        notifications.map(async notification => {
          const contact = await this.accountService.findById(
            notification.recipientId,
          );

          const notificationProfileModel = new NotificationProfileModel(contact).user;
          return {
            id: notification._id,
            type: notification.type,
            createdAt: notification.createdAt,
            user: notificationProfileModel,
          };
        }),
      );
      return Promise.resolve(data);
    } catch (err) {
      return Promise.reject(
        'There was a problem when we try to get notifications list',
      );
    }
  }

  async connectDevice(id: string, data: ConnectDeviceDto): Promise<void> {
    try {
      await Users.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            deviceInstance: {
              token: data.token,
              platform: data.platform,
            },
          },
        },
        { upsert: true },
      );
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(
        'There was a problem when we try to connect user device',
      );
    }
  }
}
