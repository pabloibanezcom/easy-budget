import { Expense } from '@/interfaces';
import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

interface ExpenseDoc extends mongoose.Document, Expense {}

const ExpenseSchema = new mongoose.Schema<ExpenseDoc>({
  description: {
    type: String,
    required: true
  },
  issuer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  date: {
    type: Date,
    required: [true, 'Please provide the date']
  },
  bankAccount: {
    type: mongoose.Schema.Types.ObjectId,
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tag'
    }
  ],
  comments: {
    type: String
  }
});

ExpenseSchema.plugin(mongoosePaginate);

export default mongoose.model<ExpenseDoc, mongoose.PaginateModel<ExpenseDoc>>('Expenses', ExpenseSchema, 'expenses');
