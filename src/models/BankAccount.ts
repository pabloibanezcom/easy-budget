import { BankAccount } from '@/interfaces';
import mongoose from 'mongoose';

interface BankAccountDoc extends mongoose.Document, BankAccount {}

const BankAccountSchema = new mongoose.Schema<BankAccountDoc>({
  bank: {
    type: mongoose.Schema.Types.ObjectId,
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
  },
  lastUpdated: {
    type: Date,
    required: true
  }
});

export default mongoose.models.BankAccount || mongoose.model<BankAccountDoc>('BankAccount', BankAccountSchema);
