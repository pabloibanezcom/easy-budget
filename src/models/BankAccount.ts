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

BankAccountSchema.statics.getAllBankAccounts = async function () {
  try {
    const bankAccounts = await this.find().sort({ createdAt: -1 }).populate('bank').lean();

    return bankAccounts.map((bankAccount: IBankAccountDocument) => ({
      ...bankAccount,
      _id: bankAccount._id.toString(),
      bank: bankAccount.bank
        ? {
            ...bankAccount.bank,
            _id: bankAccount.bank._id.toString()
          }
        : null
    }));
  } catch (error) {
    console.log('error when getting all bank accounts', error);
  }
};

export const BankAccount =
  (models.BankAccount as IBankAccountModel) ||
  model<IBankAccountDocument, IBankAccountModel>('BankAccount', BankAccountSchema);
