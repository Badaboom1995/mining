import { Document } from 'mongoose';

export interface IInvestition extends Document {
   displayName: string;
   _id: string;
}
