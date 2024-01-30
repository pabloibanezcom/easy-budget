import { Expense } from '@/interfaces';
import { BankAccount as BankAccountDB, Company, Expenses } from '@/models';
import { parseXLSX } from './xlsx/xlsxParse';

const transformElementIntoExpense = async (bankAccount: any, element: any): Promise<Expense> => {
  let company = await Company.findOne({ bankConceptName: element.concepto || element.description });
  if (!company) {
    company = await Company.findOne({ name: 'Desconocido' });
  }
  return {
    description: element.concepto || element.description,
    date: element.date || element.completedDate || element.startedDate,
    issuer: company?._id,
    bankAccount: bankAccount._id,
    amount: element.amount,
    currency: element.currency,
    category: company?._doc?.defaultCategory,
    tags: [],
    comments: element.comments
  };
};

export const generateExpenseFromFile = async (bankAccountID: string, file: any) => {
  const bankAccount = await BankAccountDB.findById(bankAccountID).populate('bank');
  if (!bankAccount) {
    throw new Error(`Bank account with ID ${bankAccountID} not found`);
  }
  const fileElements = await parseXLSX(bankAccount, file);
  const expenses = Promise.all(
    fileElements
      .filter(el => el.amount < 0)
      .map(async el => {
        return await transformElementIntoExpense(bankAccount, el);
      })
  );
  for (const expense of await expenses) {
    const newExpense = new Expenses(expense);
    await newExpense.save();
  }
  return expenses;
};
