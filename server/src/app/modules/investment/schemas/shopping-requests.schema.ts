import { Model, model, Document, Schema } from 'mongoose';

export interface ShoppingRequest extends Document {
  readonly user: string;
  readonly miningBuild: string;
  readonly transactionId: string;
  status: string;
}

export const ShoppingRequestsSchema = new Schema({
  user: String,
  miningBuild: {
    type: String,
    enum: ['1', '2'],
  },
  transactionId: String,
  status: {
    type: String,
    enum: ['On processing', 'Order details', 'Configuring miner', 'The order was sent', 'Order received'],
    default: 'On processing'
  },
  createdAt: { type: Date, default: Date.now },
});
