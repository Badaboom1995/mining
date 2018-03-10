import { Document } from 'mongoose';

export interface IContact extends Document {
   displayName: string;
   _id: string;
}
