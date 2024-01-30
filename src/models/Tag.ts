import { Tag } from '@/interfaces';
import mongoose from 'mongoose';

interface TagDoc extends mongoose.Document, Tag {}

const TagSchema = new mongoose.Schema<TagDoc>({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
});

export default mongoose.models.Tag || mongoose.model<TagDoc>('Tag', TagSchema);
