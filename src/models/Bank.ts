import { Bank } from '@/interfaces';
import mongoose from 'mongoose';

interface BankDoc extends mongoose.Document, Bank {}

const BankSchema = new mongoose.Schema<BankDoc>({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
});

export default mongoose.models.Bank || mongoose.model<BankDoc>('Bank', BankSchema);
