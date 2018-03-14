import * as crypto from 'crypto';
import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AccountService } from '../../account/services';
import { Users } from '../../account/schemas/user.schema';
import { InvestmentSchema, Investment } from '../schemas';
import { CreateInvestmentDto, GetInvestmentDto } from '../dto/investment.dto';
import {
  ADVCASH_EMAIL,
  ADVCASH_ORGANIZATION,
  ADVCASH_SECRET,
} from '../../../../config';

@Component()
export class InvestmentService {
  constructor(
    @InjectModel(InvestmentSchema)
    private readonly investmentModel: Model<Investment>,
    private readonly accountService: AccountService,
  ) {}

  async createInvestment(userId, data: CreateInvestmentDto) {
    try {
      const investment = new this.investmentModel({
        user_id: userId,
        type: data.type,
        price: data.price,
      });
      await investment.save();
      return Promise.resolve('Investment has been created');
    } catch (err) {
      return Promise.reject('Cant create sign hash');
    }
  }

  async getInvestmentsList(userId) {
    try {
      const investmentsList = await this.investmentModel.find({ userId });
      return Promise.resolve(investmentsList);
    } catch (err) {
      return Promise.reject('Cant create sign hash');
    }
  }

  async getInvestment(userId, dto: GetInvestmentDto) {
    try {
      const investmentsList = await this.investmentModel.findOne({ _id: dto.id, userId});
      return Promise.resolve(investmentsList);
    } catch (err) {
      return Promise.reject('Cant create sign hash');
    }
  }

  async createAdvcashInvoice(data) {
    try {
      const txn_id = crypto.randomBytes(64).toString('hex');
      const stt_hash = `${ADVCASH_EMAIL}:${ADVCASH_ORGANIZATION}:${data.price}:USD:${ADVCASH_SECRET}:${data._id}`;
      const hash = crypto.createHash('sha256').update(stt_hash).digest();
      const comments = `TXN ID: ${txn_id}, INVESTMENT ID: ${data.id}`;
      return Promise.resolve({
        email: ADVCASH_EMAIL,
        organization: ADVCASH_ORGANIZATION,
        comments: comments,
        order_id: data._id,
        sign: hash,
      });
    } catch (err) {
      return Promise.reject('Cant create sign hash');
    }
  }

  async processAdvcashPayment(data) {
    try {
      const stt_hash = `${data.ac_transfer}:${data.ac_start_date}:${data.ac_sci_name}:${data.ac_src_wallet}:${data.ac_dest_wallet}:${data.ac_order_id}:${data.ac_amount}:${data.ac_merchant_currency}:${ADVCASH_SECRET}`;
      const hash = crypto.createHash('sha256').update(stt_hash).digest();
      if (hash === data.hash) {
        const user: any = await Users.findOne({ _id: data.userId });
        if (user) {
          await Users.update({ _id: data.userId }, { balance: +(data.ac_amount) + user.balance});
        } else {
          return Promise.reject('User has been not found');
        }
      } else {
        return Promise.reject('Wrong hash')
      }
    } catch (err) {
      return Promise.reject(
        `${err} There was a problem when we try to add user into investment`,
      );
    }
  }
}
