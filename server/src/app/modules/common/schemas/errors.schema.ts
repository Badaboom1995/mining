import { Model, model, Document, Schema } from 'mongoose';

export interface IError extends Document {
  readonly userId: string;
  readonly errorType: string;
  readonly message: string;
}

export const ErrorLogsSchema = new Schema({
  userId: String,
  errorType: {
    type: String,
    enum: ['getTransactions', 'setUserBalance', 'getMinerPrice'],
  },
  message: String,
  createdAt: { type: Date, default: Date.now },
});

export const ErrorLog: Model<IError> = model<IError>(
  'errors-log',
  ErrorLogsSchema,
);
