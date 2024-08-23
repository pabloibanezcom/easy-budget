import mongoose, { Document, model, models } from 'mongoose';

export interface ICryptoAccountBase {
  currency: string;
  balance: number;
}

export interface ICryptoAccount extends ICryptoAccountBase {}

export interface ICryptoAccountDoc extends Document, ICryptoAccount {
  createdAt: Date;
  updatedAt: Date;
}

const CryptoAccountSchema = new mongoose.Schema<ICryptoAccountDoc>({
  __v: { type: Number, select: false },
  currency: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true
  }
});

export const CryptoAccount = models.CryptoAccount || model<ICryptoAccountDoc>('CryptoAccount', CryptoAccountSchema);
