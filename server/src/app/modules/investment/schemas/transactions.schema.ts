import { Model, model, Document, Schema } from 'mongoose';

export interface Transactions extends Document {
  user: string;
  type: string;
  amount: string;
}

export const TransactionsSchema = new Schema({
  user: String,
  type: {
    type: String,
    enum: ['investment', 'withdraw'],
  },
  amount: Number,
  createdAt: { type: Date, default: Date.now },
});
