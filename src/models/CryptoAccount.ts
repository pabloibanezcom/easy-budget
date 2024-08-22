import mongoose, { Document, model, models } from 'mongoose';

export interface ICryptoAccountBase {
  currency: string;
  balance: number;
}

export interface ICryptoAccount extends Document, ICryptoAccountBase {
  createdAt: Date;
  updatedAt: Date;
}

const CryptoAccountSchema = new mongoose.Schema<ICryptoAccount>({
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

export const CryptoAccount = models.CryptoAccount || model<ICryptoAccount>('CryptoAccount', CryptoAccountSchema);
