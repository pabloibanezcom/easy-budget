import { Document, Model, model, models, Schema } from 'mongoose';

export interface ICategoryBase {
  name: string;
  color: string;
}

export interface ICategory extends Document, ICategoryBase {
  createdAt: Date;
  updatedAt: Date;
}

interface ICategoryMethods {}

interface ICategoryStatics {
  getAllCategories(): Promise<ICategory[]>;
}

export interface ICategoryDocument extends ICategory, ICategoryMethods {}
interface ICategoryModel extends ICategoryStatics, Model<ICategoryDocument> {}

const CategorySchema = new Schema<ICategory>({
  __v: { type: Number, select: false },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
});

CategorySchema.statics.getAllCategories = async function () {
  try {
    const categories = await this.find().sort({ createdAt: -1 }).lean();

    return categories.map((category: ICategoryDocument) => ({
      ...category,
      _id: category._id.toString()
    }));
  } catch (error) {
    console.log('error when getting all categories', error);
  }
};

export const Category =
  (models.Category as ICategoryModel) || model<ICategoryDocument, ICategoryModel>('Category', CategorySchema);
