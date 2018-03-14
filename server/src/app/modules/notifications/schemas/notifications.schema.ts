import { Document, Schema } from 'mongoose';

export interface Notification extends Document {
  readonly recipientId: string;
  readonly senderId?: string;
}

export const NotificationsShema = new Schema({
  recipientId: { type: String },
  senderId: { type: String },
  type: {
    type: String,
    enum: ['add', 'message'],
    default: 'add',
  },
  isPushed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});





