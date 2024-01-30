import { Company } from '@/interfaces';
import mongoose from 'mongoose';

interface CompanyDoc extends mongoose.Document, Company {}

const CompanySchema = new mongoose.Schema<CompanyDoc>({
  name: {
    type: String,
    required: true
  },
  bankConceptName: {
    type: String
  },
  defaultCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
});

export default mongoose.models.Company || mongoose.model<CompanyDoc>('Company', CompanySchema);
