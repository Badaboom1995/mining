import * as crypto from 'crypto';
import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AccountService } from '../../account/services';
import { Users } from '../../account/schemas/user.schema';
import { ProfileModel } from '../../../models/profile-model';
import { InvestmentSchema, Investment } from '../schemas';
import { AddInvestitionDto, RemoveInvestitionDto } from '../dto/investment.dto';
import { ADVCASH_EMAIL, ADVCASH_ORGANIZATION, ADVCASH_SECRET } from '../../../../config';

@Component()
export class InvestmentService {
  constructor(
    @InjectModel(InvestmentSchema)
    private readonly investmentModel: Model<Investment>,
    private readonly accountService: AccountService,
  ) {}

  async getAdvcashSign(data) {
    try {
      const txn_id = crypto.randomBytes(64).toString('hex');
      const stt_hash = `${ADVCASH_EMAIL}:${ADVCASH_ORGANIZATION}:${data.amount}:USD:${ADVCASH_SECRET}:${data.id}`;
      const hash = crypto.createHash('sha256')
        .update(stt_hash)
        .digest('hex');
      const comments = `TXN ID: ${txn_id}, INVESTMENT ID: ${data.id}`;
      return Promise.resolve({
        email: ADVCASH_EMAIL,
        organization: ADVCASH_ORGANIZATION,
        comments: comments,
        order_id: data.id,
        sign: hash,
      });
    } catch (err) {
      return Promise.reject(
        'Cant create sign hash',
      );
    }
  }

  async addBitcoinInvestition(userId: string, data: AddInvestitionDto) {
    try {
      const user: any = await Users.findOne({ _id: userId });
      if (user) {
        const activeInvestition: any = await this.investmentModel.findOne({
          user: userId,
          payed: false,
        });
        if (activeInvestition) {
          const investition = new this.investmentModel({
            user: userId,
            balance: data.price,
          });
          await investition.save();
          return Promise.resolve();
        } else {
          return Promise.reject('You cant create two Bitcoin investition');
        }
      } else {
        return Promise.reject('User has been not found');
      }
    } catch (err) {
      return Promise.reject(
        `${err} There was a problem when we try to add user into investment`,
      );
    }
  }

  async removeFromInvestment(data: RemoveInvestitionDto, userId: string) {
    try {
      const user: any = await Users.findOne({
        _id: userId,
      });
      const $in = Array.isArray(data.list)
        ? data.list
        : (data.list as string).split(',');
      if (user) {
        await Users.update({ _id: userId }, { $pull: { investment: { $in } } });
        return Promise.resolve();
      }
    } catch (err) {
      return Promise.reject(
        `${err} There was a problem when we try to remove investment`,
      );
    }
  }

  async getInvestmentList(userId: string) {
    try {
      const user: any = await Users.findOne({
        _id: userId,
      });
      const data = Promise.all(
        user.investment.map(async e => {
          const investition = await this.accountService.findById(e);
          return new ProfileModel(investition).user;
        }),
      );
      return Promise.resolve(data);
    } catch (err) {
      return Promise.reject(
        'There was a problem when we try to get investment list',
      );
    }
  }

  async searchInvestment(param: string) {
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
