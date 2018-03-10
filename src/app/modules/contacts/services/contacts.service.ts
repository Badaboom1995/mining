import { Component, Inject } from '@nestjs/common';
import { AccountService } from '../../account/services';
import { Users } from '../../account/schemas/user.schema';
import { ProfileModel } from '../../../models/profile-model';
import { AddContactDto, RemoveFromContactsDto } from '../dto/contacts.dto';

@Component()
export class ContactsService {
  constructor(private readonly accountService: AccountService) {}

  async addContact(userId: string, contactId: AddContactDto) {
    try {
      const user: any = await Users.findOne({
        _id: userId,
        contacts: contactId.id,
      });
      if (!user) {
        await Users.update({ _id: userId }, { $push: { contacts: contactId.id } });
        return Promise.resolve();
      } else {
        return Promise.reject('User has been already added to contacts');
      }
    } catch (err) {
      return Promise.reject(
        'There was a problem when we try to add user into contacts',
      );
    }
  }

  async removeFromContacts(data: RemoveFromContactsDto, userId: string) {

    try {
      const user: any = await Users.findOne({
        _id: userId,
      });
      const $in = Array.isArray(data.list) ? data.list : (data.list as string).split(',');
      if (user) {
        await Users.update(
          { _id: userId },
          { $pull: { contacts: { $in } } },
        );
        return Promise.resolve();
      }
    } catch (err) {
      return Promise.reject(
        `${err} There was a problem when we try to remove contacts`,
      );
    }
  }

  async getContactsList(userId: string) {
    try {
      const user: any = await Users.findOne({
        _id: userId,
      });
      const data = Promise.all(
        user.contacts.map(async e => {
          const contact = await this.accountService.findById(e);
          return new ProfileModel(contact).user;
        }),
      );
      return Promise.resolve(data);
    } catch (err) {
      return Promise.reject(
        'There was a problem when we try to get contacts list',
      );
    }
  }

  async searchContacts(param: string) {
    try {
      const regex = new RegExp(`^${param}`);
      const userList: any = await Users.find(
        {
          $or: [{ username: regex }, { email: regex }, { phone: regex }],
        },
        {
          'googleAccount.token': 0,
        },
      ).limit(10);
      if (userList) {
        return Promise.resolve(userList);
      } else {
        return Promise.reject('User has not been found');
      }
    } catch (err) {
      return Promise.reject('There was a problem when we try to search user');
    }
  }
}
