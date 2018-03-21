import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  ShoppingRequestsSchema,
  IShoppingRequest,
} from '../../../../common/schemas';
import {
  changeShoppingRequestStatus,
} from '../dto/shopping-requests.dto';

@Component()
export class ShoppingRequestsService {
  constructor(
    @InjectModel(ShoppingRequestsSchema)
    private readonly shoppingRequestsModel: Model<IShoppingRequest>,
  ) {}

  async findAllShoppingRequests() {
    try {
      const shoppingRequests = await this.shoppingRequestsModel.find();
      return Promise.resolve(shoppingRequests);
    } catch (err) {
      return Promise.reject("Can't get shoppingRequests list");
    }
  }

  async changeStatusShoppingRequest(dto: changeShoppingRequestStatus) {
    try {
      const shoppingRequest = await this.shoppingRequestsModel.findOneAndUpdate({_id: dto.id}, { status: dto.status});
      return Promise.resolve(shoppingRequest);
    } catch (err) {
      return Promise.reject(`Can't change shoppingRequest status ===> ${err}`);
    }
  }
}
