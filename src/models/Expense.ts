import { Currency } from '@/enums';
import { IBankAccountDoc, ICategoryDoc, ICompanyDoc, ITagDoc } from '@/models';
import { Document, Model, model, models, PaginateModel, Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface IExpenseBase {
  description: string;
  date: Date;
  amount: number;
  currency: Currency;
  comments?: string;
}

export interface IExpense extends IExpenseBase {
  issuer: ICompanyDoc;
  bankAccount: IBankAccountDoc;
  category: ICategoryDoc;
  tags: ITagDoc[];
}

export interface IExpenseRequestBody extends IExpenseBase {
  issuer?: string;
  bankAccount?: string;
  category?: string;
  tags?: string[];
}

export interface IExpenseDoc extends IExpense, Document {
  createdAt: Date;
  updatedAt: Date;
}

interface IExpenseMethods {}

interface IExpenseStatics {
  getAllExpenses(): Promise<IExpenseDoc[]>;
}

export interface IExpenseDocument extends IExpenseDoc, IExpenseMethods {}
interface IExpenseModel extends IExpenseStatics, Model<IExpenseDocument> {}

const ExpenseSchema = new Schema<IExpenseDocument>({
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
      ref: 'Tag',
      required: true
    }
  ],
  comments: {
    type: String
  }
});

export const expensePopulateFields = [
  {
    path: 'issuer',
    select: 'name'
  },
  {
    path: 'bankAccount',
    select: 'bank alias',
    populate: {
      path: 'bank',
      select: 'name'
    }
  },
  {
    path: 'category',
    select: 'name color'
  },
  {
    path: 'tags',
    select: 'name color'
  }
];

ExpenseSchema.statics.getAllExpenses = async function () {
  try {
    return await this.find().sort({ createdAt: -1 }).populate(expensePopulateFields).lean();
  } catch (error) {
    console.log('error when getting all expenses', error);
  }
};

ExpenseSchema.plugin(mongoosePaginate);

export const Expense =
  (models.Expense as IExpenseModel) || model<IExpenseDocument, PaginateModel<IExpenseModel>>('Expense', ExpenseSchema);
