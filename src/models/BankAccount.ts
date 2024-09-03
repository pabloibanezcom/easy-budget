import { Currency } from '@/enums';
import { IBankDoc } from '@/models';
import { Document, Model, model, models, Schema } from 'mongoose';

export interface IBankAccountBase {
  iban?: string;
  sortCode?: string;
  accountNumber?: string;
  alias: string;
  currency: Currency;
  balance: number;
}

export interface IBankAccount extends IBankAccountBase {
  bank: IBankDoc;
}

export interface IBankAccountRequestBody extends IBankAccountBase {
  bank: string;
}

export interface IBankAccountDoc extends Document, IBankAccount {
  createdAt: Date;
  updatedAt: Date;
}

interface IBankAccountMethods {}

interface IBankAccountStatics {
  getAllBankAccounts(): Promise<IBankAccountDoc[]>;
}

export interface IBankAccountDocument extends IBankAccountDoc, IBankAccountMethods {}
interface IBankAccountModel extends IBankAccountStatics, Model<IBankAccountDocument> {}

const BankAccountSchema = new Schema<IBankAccountDocument>({
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

BankAccountSchema.statics.getAllBankAccounts = async function () {
  try {
    return await this.find().sort({ createdAt: -1 }).populate('bank').lean();
  } catch (error) {
    console.log('error when getting all bank accounts', error);
  }
};

export const BankAccount =
  (models.BankAccount as IBankAccountModel) ||
  model<IBankAccountDocument, IBankAccountModel>('BankAccount', BankAccountSchema);
