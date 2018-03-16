import { Model, model, Document, Schema } from 'mongoose';

export interface Investment extends Document {
  readonly user: string;
  readonly currency: string;
  readonly amount: string;
  readonly miningBuild: string;
  readonly type: string;
  payed: boolean;
}

export const InvestmentSchema = new Schema({
  user: String,
  currency: {
    type: String,
    enum: ['bitcoin', 'advcash'],
    default: 'advcash'
  },
  type: {
    type: String,
    enum: ['mining', 'pool'],
  },
  miningBuild: {
    type: String,
    enum: ['1', '2'],
  },
  amount: Number,
  payed: { type: Boolean, default: false },
  address: String,
  createdAt: { type: Date, default: Date.now },
});
