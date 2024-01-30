import { Currency } from '@/enums';
import { Bank } from './Bank';

export interface BankAccount {
  bank: Bank;
  iban?: string;
  sortCode?: string;
  accountNumber?: string;
  alias: string;
  currency: Currency;
  balance: number;
  lastUpdated: Date;
}
