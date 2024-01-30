import { NationalInsurancePayment } from '@/interfaces';
import mongoose from 'mongoose';

interface NationalInsurancePaymentDoc extends mongoose.Document, NationalInsurancePayment {}

const NationalInsurancePaymentSchema = new mongoose.Schema<NationalInsurancePaymentDoc>({
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  country: {
    type: String,
    required: true,
    enum: ['ES', 'UK']
  },
  expense: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Expense'
  }
});

export default mongoose.models.NationalInsurancePayment ||
  mongoose.model<NationalInsurancePaymentDoc>('NationalInsurancePayment', NationalInsurancePaymentSchema);
