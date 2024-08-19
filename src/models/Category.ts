import mongoose, { Document, model, models } from 'mongoose';

export interface ICategoryBase {
  name: string;
  color: string;
}

export interface ICategory extends Document, ICategoryBase {
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema = new mongoose.Schema<ICategory>({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
});

export const Category = models.Category || model<ICategory>('Category', CategorySchema);
