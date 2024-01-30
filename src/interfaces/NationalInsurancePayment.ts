import { Country } from '../enums/Country';
import { Expense } from './Expense';

export interface NationalInsurancePayment {
  amount: number;
  date: Date;
  country: Country;
  expense: Expense;
}
