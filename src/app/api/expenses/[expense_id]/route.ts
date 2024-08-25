import { authRoute } from '@/app/api/base_routes';
import { checkExpense } from '@/app/api/expenses/checkExpense';
import { deletedResponse, notFoundResponse, objectResponse, updatedResponse } from '@/app/api/responses';
import { Expense, expensePopulateFields, IExpenseRequestBody } from '@/models';

const itemName = 'Expense';

interface IRequestParams {
  params: {
    expense_id: string;
  };
}

export async function GET(request: Request, { params }: IRequestParams): Promise<any> {
  return await authRoute(async () => {
    const expense = await Expense.findById(params.expense_id).populate(expensePopulateFields);

    if (!expense) {
      return notFoundResponse(itemName);
    }

    return objectResponse(expense);
  });
}

export async function PUT(request: Request, { params }: IRequestParams): Promise<any> {
  return await authRoute(async () => {
    const expenseData: IExpenseRequestBody = await request.json();
    const badRequestResponse = await checkExpense(expenseData);

    if (badRequestResponse) {
      return badRequestResponse;
    }

    let expense;

    try {
      expense = await Expense.findByIdAndUpdate(params.expense_id, expenseData, { new: true }).populate(
        expensePopulateFields
      );
    } catch (error) {
      return notFoundResponse(itemName);
    }

    return updatedResponse(itemName, expense);
  });
}

export async function DELETE(request: Request, { params }: IRequestParams): Promise<any> {
  return await authRoute(async () => {
    let expense;

    try {
      expense = await Expense.findByIdAndDelete(params.expense_id).populate(expensePopulateFields);
    } catch (error) {
      return notFoundResponse(itemName);
    }

    return deletedResponse(itemName, expense);
  });
}
