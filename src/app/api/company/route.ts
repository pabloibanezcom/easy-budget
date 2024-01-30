import { Company } from '@/models';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../dbConnect';

export async function GET(request: NextRequest) {
  await dbConnect();
  const result = await Company.find({});
  return NextResponse.json(result);
}
