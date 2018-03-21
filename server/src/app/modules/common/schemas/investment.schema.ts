import { Model, model, Document, Schema } from 'mongoose';

export interface Investment extends Document {
  readonly userId: string;
  readonly currency: string;
  readonly amount: string;
  readonly miningBuild: string;
  readonly investmentType: string;
  payed: boolean;
  address: string;
}

export const InvestmentSchema = new Schema({
  userId: String,
  currency: {
    type: String,
    enum: ['bitcoin', 'advcash'],
    default: 'advcash'
  },
  investmentType: {
    type: String,
    enum: ['mining', 'pool'],
  },
  miningBuild: {
    type: String,
    enum: ['1', '2'],
  },
  lastTransactionId: {
    type: String
  },
  amount: Number,
  payed: { type: Boolean, default: false },
  address: String,
  createdAt: { type: Date, default: Date.now },
});


export const Investments: Model<Investment> = model<Investment>('investments', InvestmentSchema);
