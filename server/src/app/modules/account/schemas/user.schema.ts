import { User } from '../interfaces/user.interface';
import { Document, Schema, Error, Model, model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

export interface IUserModel extends User, Document {
  comparePassword?: (candidatePassword: string) => boolean;
  generateHash?: (password: string) => string;
  deviceInstance?: any;
  firstName?: string;
  lastName?: string;
  balance?: string;
}

const UserSchema = new Schema(
  {
    firstName: { type: String, default: '' },
    secondName: { type: String, default: '' },
    lastName: { type: String, default: '' },

    email: { type: String, unique: true },
    contactEmail: { type: String, default: '' },
    password: String,
    passwordResetToken: String,
    passwordResetExpires: Date,
    registrationComplete: { type: Boolean, default: false },
    language: { type: String, default: 'en' },

    contacts: [String],

    skype: { type: String, default: '' },
    phone: { type: String, default: '' },
    companyUrl: { type: String, default: '' },
    companyName: { type: String, default: '' },
    position: { type: String, default: '' },

    photo: { type: String, default: '' },
    invitedBy: { type: String, default: '' },
    registrationType: {
      type: String,
      enum: ['local', 'facebook', 'google'],
      default: '',
    },
    receiveNotifications: { type: Boolean, default: false },

    deviceInstance: { type: Object, default: null },

    googleAccount: { type: Object, default: null },
    facebookAccount: { type: Object, default: null },

    address: { type: Object, default: null },


    balance: {
      eth: {
        type: Number,
        default: 0
      },
      zcash: {
        type: Number,
        default: 0
      },
      usd: {
        type: Number,
        default: 0
      }
    },

    earned: {
      eth: {
        type: Number,
        default: 0
      },
      zcash: {
        type: Number,
        default: 0
      },
      usd: {
        type: Number,
        default: 0
      }
    },

    roles: {
      type: String,
      enum: ['user', 'manager', 'admin'],
      default: 'user',
    },
  },
  { timestamps: true },
);

UserSchema.pre('save', function save(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword: string) {
  try {
    return bcrypt.compare(candidatePassword, this.password);
  } catch (err) {
    throw err;
  }
};

export const Users: Model<IUserModel> = model<IUserModel>('users', UserSchema);
