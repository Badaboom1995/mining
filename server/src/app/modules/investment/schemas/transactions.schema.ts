import { Model, model, Document, Schema } from 'mongoose';

export interface Transactions extends Document {
  user: string;
  type: string;
  amount: string;
}

export const TransactionsSchema = new Schema({
  user: String,
  investmentType: {
    type: String,
    enum: ['mining', 'pool'],
  },
  transactionType: {
    type: String,
    enum: ['investment', 'withdraw', 'bonus']
  },
  amount: Number,
  merchantAmount: Number,
  currency: {
    type: String,
    enum: ['USD', 'UAH']
  },
  createdAt: { type: Date, default: Date.now },
});
