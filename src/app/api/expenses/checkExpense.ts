import { BankAccount, Category, Company, IExpenseRequestBody } from '@/models';
import { badRequestResponse } from '../responses';

export const checkExpense = async (expenseData: IExpenseRequestBody) => {
  if (!expenseData.issuer) {
    return badRequestResponse('Issuer is required');
  }

  if (!expenseData.bankAccount) {
    return badRequestResponse('Bank Account is required');
  }

  if (!expenseData.category) {
    return badRequestResponse('Category is required');
  }

  try {
    const currentIssuer = await Company.findById(expenseData.issuer);
    const currentBankAccount = await BankAccount.findById(expenseData.bankAccount);
    const currentCategory = await Category.findById(expenseData.category);

    if (!currentIssuer) {
      return badRequestResponse('Invalid issuer');
    }

    if (!currentBankAccount) {
      return badRequestResponse('Invalid bank account');
    }

    if (!currentCategory) {
      return badRequestResponse('Invalid category');
    }

    return;
  } catch (error) {
    return badRequestResponse('Invalid data');
  }
};
