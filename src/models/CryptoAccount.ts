import { CryptoAccount } from '@/interfaces';
import mongoose from 'mongoose';

interface CryptoAccountDoc extends mongoose.Document, CryptoAccount {}

const CryptoAccountSchema = new mongoose.Schema<CryptoAccountDoc>({
  currency: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true
  }
});

export default mongoose.models.CryptoAccount || mongoose.model<CryptoAccountDoc>('CryptoAccount', CryptoAccountSchema);
