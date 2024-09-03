'use server';

import { Expense, IExpenseDoc, IExpenseRequestBody } from '@/models';
import { redirect } from 'next/navigation';

export async function getExpenses(): Promise<IExpenseDoc[]> {
  const expenses = await Expense.getAllExpenses();
  return JSON.parse(JSON.stringify(expenses));
}

export async function getExpense(expenseId: string): Promise<IExpenseDoc | null> {
  const expense = await Expense.findById(expenseId);
  return JSON.parse(JSON.stringify(expense));
}

export async function createExpense(expense: IExpenseRequestBody): Promise<void> {
  await Expense.create(expense);
  redirect('/expenses');
}
