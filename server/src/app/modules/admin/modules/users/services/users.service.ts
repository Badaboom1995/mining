import { Component, Inject } from '@nestjs/common';
import {
  changeUserAddressDto,
} from '../dto/users.dto';
import { Users } from '../../../../account/schemas/user.schema';

@Component()
export class UsersListService {
  constructor() {}
  async changeUserAddress(dto: changeUserAddressDto) {
    try {
      await Users.findOneAndUpdate(
        { _id: dto.user },
        {
          address: {
            eth: dto.eth,
            zcash: dto.zcash,
          },
        },
      );
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(`Can't change user address ===> ${err}`);
    }
  }
}
