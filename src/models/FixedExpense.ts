import { FixedExpense } from '@/interfaces';
import mongoose from 'mongoose';

interface FixedExpenseDoc extends mongoose.Document, FixedExpense {}

const FixedExpenseSchema = new mongoose.Schema<FixedExpenseDoc>({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
    maxlength: [60, 'Name cannot be more than 60 characters']
  }
});

export default mongoose.models.FixedExpense || mongoose.model<FixedExpenseDoc>('FixedExpense', FixedExpenseSchema);
