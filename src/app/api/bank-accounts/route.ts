import { authRoute } from '@/app/api/base_routes';
import { badRequestResponse, createdResponse, notFoundResponse, objectResponse } from '@/app/api/responses';
import { Bank, BankAccount, IBankAccountRequestBody } from '@/models';

const itemName = 'Bank Account';

export async function GET() {
  return await authRoute(async () => {
    const bankAccounts = await BankAccount.getAllBankAccounts();
    return objectResponse(bankAccounts);
  });
}

export async function POST(request: Request) {
  return await authRoute(async () => {
    const { iban, sortCode, accountNumber, alias, currency, balance, bank }: IBankAccountRequestBody =
      await request.json();
    const bankAccountData: IBankAccountRequestBody = {
      iban,
      sortCode,
      accountNumber,
      alias,
      currency,
      balance,
      bank
    };

    if (bank) {
      try {
        const currentBank = await Bank.findById(bank);
        bankAccountData.bank = currentBank?._id;
        const bankAccount = await BankAccount.create(bankAccountData);
        return createdResponse(itemName, bankAccount);
      } catch (error) {
        return notFoundResponse('Bank');
      }
    }

    return badRequestResponse('Bank is required');
  });
}
