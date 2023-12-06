import { NextRequest, NextResponse } from 'next/server';
import Expense from '../../../models/Expense';
import dbConnect from '../dbConnect';

export async function GET(request: NextRequest) {
  await dbConnect();
  const expenses = await Expense.find({});
  return NextResponse.json({ expenses });
}
