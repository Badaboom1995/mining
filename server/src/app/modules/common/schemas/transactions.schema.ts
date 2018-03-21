import { Model, model, Document, Schema } from 'mongoose';

export interface ITransactions extends Document {
  userId: string;
  transactionType: string;
  currency: string;
  amount: string;
}

export const TransactionsSchema = new Schema({
  userId: String,
  investmentType: {
    type: String,
    enum: ['mining', 'pool'],
  },
  transactionType: {
    type: String,
    enum: ['investment', 'withdraw', 'miner-reward', 'bonus']
  },
  amount: Number,
  merchantAmount: Number,
  currency: {
    type: String,
    enum: ['USD', 'UAH', 'ZCASH', 'ETH']
  },
  createdAt: { type: Date, default: Date.now },
});

export const Transactions: Model<ITransactions> = model<ITransactions>(
  'transactions',
  TransactionsSchema,
);
