import mongoose from 'mongoose';

export interface Expenses extends mongoose.Document {
  name: string;
  date: Date;
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const ExpenseSchema = new mongoose.Schema<Expenses>({
  name: {
    /* The name of this pet */

    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [60, 'Name cannot be more than 60 characters']
  },
  date: {
    /* The owner of this pet */

    type: Date,
    required: [true, "Please provide the pet owner's name"]
  }
});

export default mongoose.models.Expense || mongoose.model<Expenses>('Expense', ExpenseSchema);
