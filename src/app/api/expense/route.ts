import { Expenses } from '@/models';
import { getPaginationFromRequest } from '@/services/http/pagination';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../dbConnect';

export async function GET(request: NextRequest) {
  await dbConnect();
  const result = await Expenses.paginate({}, getPaginationFromRequest(request, { limit: 10 }));
  return NextResponse.json(result);
}
