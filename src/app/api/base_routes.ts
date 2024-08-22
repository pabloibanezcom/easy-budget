import { internalServerErrorResponse, unaithoriazedResponse } from '@/app/api/responses';
import connectDB from '@/db';
import { auth } from '@clerk/nextjs/server';

export const authRoute = async (func: ({ userId }: { userId: string }) => {}) => {
  const { userId }: { userId: string | null } = auth();

  if (!userId) {
    return unaithoriazedResponse();
  }

  try {
    await connectDB();
    return await func({ userId });
  } catch (error) {
    return internalServerErrorResponse();
  }
};
