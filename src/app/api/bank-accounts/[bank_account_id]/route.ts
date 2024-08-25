import { authRoute } from '@/app/api/base_routes';
import { deletedResponse, notFoundResponse, objectResponse, updatedResponse } from '@/app/api/responses';
import { BankAccount } from '@/models';

const itemName = 'Bank Account';

interface IRequestParams {
  params: {
    bank_account_id: string;
  };
}

export async function GET(request: Request, { params }: IRequestParams): Promise<any> {
  return await authRoute(async () => {
    const bankAccount = await BankAccount.findById(params.bank_account_id);

    if (!bankAccount) {
      return notFoundResponse(itemName);
    }

    return objectResponse(bankAccount);
  });
}

export async function PUT(request: Request, { params }: IRequestParams): Promise<any> {
  return await authRoute(async () => {
    const bankAccountData = await request.json();

    let bankAccount;

    try {
      bankAccount = await BankAccount.findByIdAndUpdate(params.bank_account_id, bankAccountData, { new: true });
    } catch (error) {
      return notFoundResponse(itemName);
    }

    return updatedResponse(itemName, bankAccount);
  });
}

export async function DELETE(request: Request, { params }: IRequestParams): Promise<any> {
  return await authRoute(async () => {
    let bankAccount;

    try {
      bankAccount = await BankAccount.findByIdAndDelete(params.bank_account_id);
    } catch (error) {
      return notFoundResponse(itemName);
    }

    return deletedResponse(itemName, bankAccount);
  });
}
