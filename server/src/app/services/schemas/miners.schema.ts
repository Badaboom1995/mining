import { Model, model, Document, Schema } from 'mongoose';

export interface IMiner extends Document {
  address: string;
  addressType: string;
}

export const MinersListSchema = new Schema({
  address: String,
  addressType: { type: String, enum: ['eth', 'zcash'] },
  earned: {
    eth: {
      type: Number,
      default: 0
    },
    zcash: {
      type: Number,
      default: 0
    },
  },
  lastTransactionId: String,
  createdAt: { type: Date, default: Date.now },
});

export const MinersList: Model<IMiner> = model<IMiner>(
  'miners',
  MinersListSchema,
);
