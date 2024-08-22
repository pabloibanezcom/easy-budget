import { Document, Model, model, models, Schema } from 'mongoose';

export interface ITagBase {
  name: string;
  color: string;
}

export interface ITag extends Document, ITagBase {
  createdAt: Date;
  updatedAt: Date;
}

interface ITagMethods {}

interface ITagStatics {
  getAllTags(): Promise<ITag[]>;
}

export interface ITagDocument extends ITag, ITagMethods {}
interface ITagModel extends ITagStatics, Model<ITagDocument> {}

const TagSchema = new Schema<ITag>({
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
    const tags = await this.find().sort({ createdAt: -1 }).lean();

    return tags.map((tag: ITagDocument) => ({
      ...tag,
      _id: tag._id.toString()
    }));
  } catch (error) {
    console.log('error when getting all tags', error);
  }
};

export const Tag = (models.Tag as ITagModel) || model<ITagDocument, ITagModel>('Tag', TagSchema);
