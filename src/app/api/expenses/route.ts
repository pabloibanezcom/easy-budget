import { authRoute } from '@/app/api/base_routes';
import { checkExpense } from '@/app/api/expenses/checkExpense';
import { createdResponse, objectResponse } from '@/app/api/responses';
import { Expense, IExpenseRequestBody } from '@/models';

const itemName = 'Expense';

export async function GET() {
  return await authRoute(async () => {
    const expenses = await Expense.getAllExpenses();
    return objectResponse(expenses);
  });
}

export async function POST(request: Request) {
  return await authRoute(async () => {
    const expenseData: IExpenseRequestBody = await request.json();
    const badRequestResponse = await checkExpense(expenseData);

    if (badRequestResponse) {
      return badRequestResponse;
    }

    const expense = await Expense.create(expenseData);
    return createdResponse(itemName, expense);
  });
}
