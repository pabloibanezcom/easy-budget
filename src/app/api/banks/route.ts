import { authRoute } from '@/app/api/base_routes';
import { createdResponse, objectResponse } from '@/app/api/responses';
import { Bank, IBankBase } from '@/models';

const itemName = 'Bank';

export async function GET(): Promise<any> {
  return await authRoute(async () => {
    const banks = await Bank.getAllBanks();
    return objectResponse(banks);
  });
}

export async function POST(request: Request): Promise<any> {
  return await authRoute(async () => {
    const { name, country }: IBankBase = await request.json();
    const bankData: IBankBase = {
      name,
      country
    };

    const bank = await Bank.create(bankData);
    return createdResponse(itemName, bank);
  });
}
