import { Document, Schema, model, models } from 'mongoose';

export interface ITagBase {
  name: string;
  color: string;
}

export interface ITag extends Document, ITagBase {
  createdAt: Date;
  updatedAt: Date;
}

const TagSchema = new Schema<ITag>({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
});

export const Tag = models.Tag || model<ITag>('Tag', TagSchema);
