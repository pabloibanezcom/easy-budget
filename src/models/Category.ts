import { Category } from '@/interfaces';
import mongoose from 'mongoose';

interface CategoryDoc extends mongoose.Document, Category {}

const CategorySchema = new mongoose.Schema<CategoryDoc>({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
});

export default mongoose.models.Category || mongoose.model<CategoryDoc>('Category', CategorySchema);
