import { CryptoAccount } from '@/models';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../dbConnect';

export async function GET(request: NextRequest) {
  await dbConnect();
  const result = await CryptoAccount.find({});
  return NextResponse.json(result);
}

export async function POST(request: NextRequest) {
  await dbConnect();
  const newCryptoAccount = new CryptoAccount(await request.json());
  const result = await newCryptoAccount.save();
  return NextResponse.json(result);
}
