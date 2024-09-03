import { Document, Model, model, models, Schema } from 'mongoose';

export interface ITagBase {
  name: string;
  color: string;
}

export interface ITag extends ITagBase {}

export interface ITagDoc extends Document, ITag {
  createdAt: Date;
  updatedAt: Date;
}

interface ITagMethods {}

interface ITagStatics {
  getAllTags(): Promise<ITagDoc[]>;
}

export interface ITagDocument extends ITagDoc, ITagMethods {}
interface ITagModel extends ITagStatics, Model<ITagDocument> {}

const TagSchema = new Schema<ITagDocument>({
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

TagSchema.statics.getAllTags = async function () {
  try {
    return await this.find().sort({ createdAt: -1 }).lean();
  } catch (error) {
    console.log('error when getting all tags', error);
  }
};

export const Tag = (models.Tag as ITagModel) || model<ITagDocument, ITagModel>('Tag', TagSchema);
