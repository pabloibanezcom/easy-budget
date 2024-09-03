import { Document, Model, model, models, Schema } from 'mongoose';

export interface ICategoryBase {
  name: string;
  color: string;
}

export interface ICategory extends ICategoryBase {}

export interface ICategoryDoc extends Document, ICategory {
  createdAt: Date;
  updatedAt: Date;
}

interface ICategoryMethods {}

interface ICategoryStatics {
  getAllCategories(): Promise<ICategoryDocument[]>;
}

export interface ICategoryDocument extends ICategoryDoc, ICategoryMethods {}
interface ICategoryModel extends ICategoryStatics, Model<ICategoryDocument> {}

const CategorySchema = new Schema<ICategoryDocument>({
  __v: { type: Number, select: false },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date,
    required: true
  }
});

CategorySchema.statics.getAllCategories = async function () {
  try {
    return await this.find().sort({ name: 1 });
  } catch (error) {
    console.log('error when getting all categories', error);
  }
};

export const Category =
  (models.Category as ICategoryModel) || model<ICategoryDocument, ICategoryModel>('Category', CategorySchema);
