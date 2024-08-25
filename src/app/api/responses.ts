import { NextResponse } from 'next/server';

export const unaithoriazedResponse = () => {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
};

export const internalServerErrorResponse = () => {
  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
};

export const badRequestResponse = (message: string) => {
  return NextResponse.json({ error: message || 'Bad request' }, { status: 400 });
};

export const notFoundResponse = (itemName: string): NextResponse => {
  return NextResponse.json({ error: itemName ? `${itemName} not found` : 'Not found' }, { status: 404 });
};

export const objectResponse = (object: any): NextResponse => {
  return NextResponse.json(object, { status: 200 });
};

export const createdResponse = (itemName: string, object: any) => {
  return NextResponse.json({ message: `${itemName || 'item'} created successfully`, object }, { status: 200 });
};

export const updatedResponse = (itemName: string, object: any) => {
  return NextResponse.json({ message: `${itemName || 'item'} updated successfully`, object }, { status: 200 });
};

export const deletedResponse = (itemName: string, object: any) => {
  return NextResponse.json({ message: `${itemName || 'item'} deleted successfully`, object }, { status: 200 });
};
