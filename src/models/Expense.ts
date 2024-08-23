import { Currency } from '@/enums';
import { IBankAccountDoc, ICategoryDoc, ICompanyDoc, ITagDoc } from '@/models';
import { Document, PaginateModel, Schema, model, models } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface IExpenseBase {
  id?: any;
  description: string;
  issuer: ICompanyDoc;
  date: Date;
  bankAccount: IBankAccountDoc;
  amount: number;
  currency: Currency;
  category: ICategoryDoc;
  tags?: ITagDoc[];
  comments?: string;
}

export interface IExpenseDoc extends IExpenseBase, Document {
  createdAt: Date;
  updatedAt: Date;
}

const ExpenseSchema = new Schema<IExpenseDoc>({
  __v: { type: Number, select: false },
  description: {
    type: String,
    required: true
  },
  issuer: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  date: {
    type: Date,
    required: [true, 'Please provide the date']
  },
  bankAccount: {
    type: Schema.Types.ObjectId,
    ref: 'BankAccount',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true,
    enum: ['EUR', 'GBP', 'USD']
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tag'
    }
  ],
  comments: {
    type: String
  }
});

ExpenseSchema.plugin(mongoosePaginate);

export const Expense = models.Expense || model<IExpenseDoc, PaginateModel<IExpenseDoc>>('Expense', ExpenseSchema);
