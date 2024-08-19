import connectDB from '@/db';
import { Bank, IBankBase } from '@/models';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();

    const posts = await Bank.getAllBanks();

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred while fetching posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  //  auth().protect();
  const { name, country }: IBankBase = await request.json();
  try {
    await connectDB();

    const bankData: IBankBase = {
      name,
      country
    };

    const bank = await Bank.create(bankData);
    return NextResponse.json({ message: 'Bank created successfully', bank });
  } catch (error) {
    return NextResponse.json({ error: `An error occurred while creating the post ${error}` }, { status: 500 });
  }
}
