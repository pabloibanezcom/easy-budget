import { ICategory } from '@/models';
import { Document, model, models, Schema } from 'mongoose';

export interface ICompanyBase {
  name: string;
  bankConceptName?: string;
  defaultCategory?: ICategory;
}

export interface ICompany extends Document, ICompanyBase {
  createdAt: Date;
  updatedAt: Date;
}

const CompanySchema = new Schema<ICompany>({
  name: {
    type: String,
    required: true
  },
  bankConceptName: {
    type: String
  },
  defaultCategory: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
});

export const Company = models.Company || model<ICompany>('Company', CompanySchema);
