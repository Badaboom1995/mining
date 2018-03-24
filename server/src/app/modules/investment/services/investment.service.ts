import * as crypto from 'crypto';
import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AccountService } from '../../account/services';
import { Users } from '../../account/schemas/user.schema';
import {
  InvestmentSchema,
  IInvestment,
  TransactionsSchema,
  ITransactions,
  ShoppingRequestsSchema,
  IShoppingRequest,
} from '../../../services/schemas/index';
import {
  CreateInvestmentDto,
  GetInvestmentDto,
  ProcessAdvcashPaymentDto,
} from '../dto/investment.dto';
import {
  ADVCASH_EMAIL,
  ADVCASH_ORGANIZATION,
  ADVCASH_SECRET,
} from '../../../config/environments.config';

@Component()
export class InvestmentService {
  constructor(
    @InjectModel(InvestmentSchema)
    private readonly investmentModel: Model<IInvestment>,
    @InjectModel(TransactionsSchema)
    private readonly transactionsModel: Model<ITransactions>,
    @InjectModel(ShoppingRequestsSchema)
    private readonly shoppingRequestsModel: Model<IShoppingRequest>,
    private readonly accountService: AccountService,
  ) {}

  async createInvestment(userId, data: CreateInvestmentDto) {
    try {
      const investment = new this.investmentModel({
        user: userId,
        amount: data.amount,
        investmentType: data.investmentType,
        miningBuild: data.miningBuild,
      });
      await investment.save();
      return Promise.resolve('Investment has been created');
    } catch (err) {
      return Promise.reject("Can't create investment");
    }
  }

  async getInvestment(userId, dto: GetInvestmentDto) {
    try {
      const investmentsList = await this.investmentModel.findOne({
        _id: dto.id,
        userId,
      });
      return Promise.resolve(investmentsList);
    } catch (err) {
      return Promise.reject("Can't get investment");
    }
  }

  async getInvestmentsList(userId) {
    try {
      const investmentsList = await this.investmentModel.find({ userId });
      return Promise.resolve(investmentsList);
    } catch (err) {
      return Promise.reject("Can't get user investments list");
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
      return Promise.reject("Can't create sign hash");
    }
  }

  async processAdvcashPaymentDummy(data: ProcessAdvcashPaymentDto) {
    try {
      console.log('Start processing dummy Advcash success payment notification');
      const investment: any = await this.investmentModel.findOne({
        _id: data.ac_order_id,
        userId: data.user_id,
        payed: false
      });
      if (investment) {
        const transaction = new this.transactionsModel({
          amount: data.ac_amount,
          merchantAmount: data.ac_merchant_amount,
          investmentType: data.investment_type,
          currency: data.ac_merchant_currency,
          status: data.ac_transaction_status,
          userId: data.user_id,
          transactionType: 'investment'
        });
        await transaction.save();
        if (data.ac_transaction_status === "SUCCESS") {
          await this.investmentModel.findOneAndUpdate({ _id: data.ac_order_id }, { payed: true });
        }
        switch (data.investment_type) {
          case 'pool': {
            // take a part in pool
            break;
          }
          case 'mining': {
            // send a shopping request
            const request = new this.shoppingRequestsModel({
              userId: data.user_id,
              miningBuild: investment.miningBuild,
              transactionId: transaction._id,
              investmentId: investment._id
            });
            await request.save();
            break;
          }
        }
      } else {
        return Promise.reject('User or Investment has been not found');
      }
    } catch (err) {
      return Promise.reject(
        `There was a problem when we try to process payment ===> Details: ${err}`,
      );
    }
  }


  async processAdvcashPayment(data) {
    try {
      const stt_hash = `${data.ac_transfer}:${data.ac_start_date}:${data.ac_sci_name}:${data.ac_src_wallet}:${data.ac_dest_wallet}:${data.ac_order_id}:${data.ac_amount}:${data.ac_merchant_currency}:${ADVCASH_SECRET}`;
      const hash = crypto.createHash('sha256').update(stt_hash).digest();
      if (hash === data.hash) {
        const user: any = await Users.findOne({ _id: data.userId });
        if (user) {
          await Users.update(
            { _id: data.userId },
            { balance: +data.ac_amount + user.balance },
          );
        } else {
          return Promise.reject('User has been not found');
        }
      } else {
        return Promise.reject('Wrong hash');
      }
    } catch (err) {
      return Promise.reject(
        `There was a problem when we try to process payment ===> Details: ${err}`,
      );
    }
  }
}
