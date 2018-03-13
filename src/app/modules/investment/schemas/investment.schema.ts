import { Model, model, Document, Schema } from 'mongoose';

export interface Investment extends Document {
  readonly user: string;
  readonly currency: string;
  readonly balance: string;
}

export const InvestmentSchema = new Schema({
  user: String,
  currency: {
    type: String,
    enum: ['bitcoin', 'adcash'],
  },
  balance: Number,
  payed: { type: Boolean, default: false },
  address: String,
  createdAt: { type: Date, default: Date.now },
});
