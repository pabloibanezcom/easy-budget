import mongoose, { Document, Model, model, models } from 'mongoose';

export interface IBankBase {
  name: string;
  country: string;
}

export interface IBank extends IBankBase {}

export interface IBankDoc extends IBankBase, Document {
  createdAt: Date;
  updatedAt: Date;
}

interface IBankMethods {}

interface IBankStatics {
  getAllBanks(): Promise<IBankDoc[]>;
}

export interface IBankDocument extends IBankDoc, IBankMethods {}
interface IBankModel extends IBankStatics, Model<IBankDocument> {}

const BankSchema = new mongoose.Schema<IBankDoc>({
  __v: { type: Number, select: false },
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
});

BankSchema.statics.getAllBanks = async function () {
  try {
    const banks = await this.find().sort({ createdAt: -1 }).lean();

    return banks.map((bank: IBankDocument) => ({
      ...bank,
      _id: bank._id.toString()
    }));
  } catch (error) {
    console.log('error when getting all banks', error);
  }
};

export const Bank = (models.Bank as IBankModel) || model<IBankDocument, IBankModel>('Bank', BankSchema);
