import { authRoute } from '@/app/api/base_routes';
import { deletedResponse, notFoundResponse, objectResponse, updatedResponse } from '@/app/api/responses';
import { Bank } from '@/models';

const itemName = 'Bank';

interface IRequestParams {
  params: {
    bank_id: string;
  };
}

export async function GET(request: Request, { params }: IRequestParams): Promise<any> {
  return await authRoute(async () => {
    const bank = await Bank.findById(params.bank_id);

    if (!bank) {
      return notFoundResponse(itemName);
    }

    return objectResponse(bank);
  });
}

export async function PUT(request: Request, { params }: IRequestParams): Promise<any> {
  return await authRoute(async () => {
    const bankData = await request.json();

    let bank;

    try {
      bank = await Bank.findByIdAndUpdate(params.bank_id, bankData, { new: true });
    } catch (error) {
      return notFoundResponse(itemName);
    }

    return updatedResponse(itemName, bank);
  });
}

export async function DELETE(request: Request, { params }: IRequestParams): Promise<any> {
  return await authRoute(async () => {
    let bank;

    try {
      bank = await Bank.findByIdAndDelete(params.bank_id);
    } catch (error) {
      return notFoundResponse(itemName);
    }

    return deletedResponse(itemName, bank);
  });
}
