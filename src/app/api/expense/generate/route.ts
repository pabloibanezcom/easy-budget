import { generateExpenseFromFile as generateExpensesFromFile } from '@/services/Expense';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../dbConnect';

export async function POST(request: NextRequest) {
  await dbConnect();
  const data = await request.formData();
  const file: File | null = data.get('file') as unknown as File;
  const bankAccountID = data.get('bankAccount') as string;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const expenses = await generateExpensesFromFile(bankAccountID, file);

  return NextResponse.json(`Expenses generated: ${expenses.length}`);
}
