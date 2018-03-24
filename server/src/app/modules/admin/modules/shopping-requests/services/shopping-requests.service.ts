import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from "@nestjs/typeorm";
import {
  ShoppingRequestsSchema,
  IShoppingRequest,
} from '../../../../../services/schemas';
import {
  changeShoppingRequestStatus,
} from '../dto/shopping-requests.dto';
import { Transaction } from "../../../../../entity/transaction.entity";
import { Repository } from "typeorm";
import { User } from "../../../../../entity/user.entity";

@Component()
export class ShoppingRequestsService {
  constructor(
    @InjectModel(ShoppingRequestsSchema)
    private readonly shoppingRequestsModel: Model<IShoppingRequest>,
    @InjectRepository(Transaction)
    private readonly transactionsRepository: Repository<Transaction>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async findAllShoppingRequests() {
    try {
      const shoppingRequests = await this.shoppingRequestsModel.find();
      const transactions = await this.transactionsRepository.find();
      return Promise.resolve(transactions);
    } catch (err) {
      return Promise.reject("Can't get shoppingRequests list");
    }
  }

  async createShoppingRequests(data) {
    try {
      // const transaction = new Transaction();
      // transaction.currency = 'sukableat';
      // transaction.investmentType = 'chlen';
      // await this.transactionsRepository.save(transaction);
      const user = new User();
      user.email = 'abc@ukr.net';
      user.password = 'abcabc';
      await this.userRepository.save(user);
      return Promise.resolve();
    } catch (err) {
      console.log(err);
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
