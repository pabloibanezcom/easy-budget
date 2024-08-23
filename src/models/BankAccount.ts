import { Currency } from '@/enums';
import { IBankDoc } from '@/models';
import { Document, Schema, model, models } from 'mongoose';

export interface IBankAccountBase {
  bank: IBankDoc;
  iban?: string;
  sortCode?: string;
  accountNumber?: string;
  alias: string;
  currency: Currency;
  balance: number;
}

export interface IBankAccountDoc extends Document, IBankAccountBase {
  createdAt: Date;
  updatedAt: Date;
}

const BankAccountSchema = new Schema<IBankAccountDoc>({
  __v: { type: Number, select: false },
  bank: {
    type: Schema.Types.ObjectId,
    ref: 'Bank',
    required: true
  },
  iban: {
    type: String
  },
  sortCode: {
    type: String
  },
  accountNumber: {
    type: String
  },
  alias: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true,
    enum: ['EUR', 'GBP', 'USD']
  },
  balance: {
    type: Number,
    required: true
  }
});

export const BankAccount = models.Category || model<IBankAccountDoc>('BankAccount', BankAccountSchema);
