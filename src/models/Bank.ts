import mongoose, { Document, model, models } from 'mongoose';

export interface IBankBase {
  name: string;
  country: string;
}

export interface IBank extends Document, IBankBase {
  createdAt: Date;
  updatedAt: Date;
}

const BankSchema = new mongoose.Schema<IBank>({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
});

export const Bank = models.Category || model<IBank>('Bank', BankSchema);
