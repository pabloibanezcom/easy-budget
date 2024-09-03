'use server';

import { BankAccount, IBankAccountDoc } from '@/models';

export async function getBankAccounts(): Promise<IBankAccountDoc[]> {
  const bankAccounts = await BankAccount.getAllBankAccounts();
  return JSON.parse(JSON.stringify(bankAccounts));
}
