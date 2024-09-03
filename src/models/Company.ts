import { ICategory } from '@/models';
import { Document, model, Model, models, Schema } from 'mongoose';

export interface ICompanyBase {
  name: string;
  bankConceptName?: string;
}
export interface ICompany extends ICompanyBase {
  defaultCategory?: ICategory;
}

export interface ICompanyRequestBody extends ICompanyBase {
  defaultCategory?: string;
}

export interface ICompanyDoc extends Document, ICompany {
  createdAt: Date;
  updatedAt: Date;
}

interface ICompanyMethods {}

interface ICompanyStatics {
  getAllCompanies(): Promise<ICompanyDoc[]>;
}

export interface ICompanyDocument extends ICompanyDoc, ICompanyMethods {}
interface ICompanyModel extends ICompanyStatics, Model<ICompanyDocument> {}

const CompanySchema = new Schema<ICompanyDocument>({
  __v: { type: Number, select: false },
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

CompanySchema.statics.getAllCompanies = async function () {
  try {
    return await this.find().sort({ createdAt: -1 }).populate('defaultCategory').lean();
  } catch (error) {
    console.log('error when getting all companies', error);
  }
};

export const Company =
  (models.Company as ICompanyModel) || model<ICompanyDocument, ICompanyModel>('Company', CompanySchema);
