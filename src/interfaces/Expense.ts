import { Currency } from '@/enums';
import { BankAccount, Category, Company, Tag } from './';

export interface Expense {
  description: string;
  issuer: Company;
  date: Date;
  bankAccount: BankAccount;
  amount: number;
  currency: Currency;
  category: Category;
  tags?: Tag[];
  comments?: string;
}
