import { PaginateOptions } from 'mongoose';
import { NextRequest } from 'next/server';

export const getPaginationFromRequest = (request: NextRequest, defaultPagination: PaginateOptions) => {
  const page = request.nextUrl.searchParams.get('page');
  const limit = request.nextUrl.searchParams.get('limit');
  return {
    ...defaultPagination,
    page: page ? parseInt(page) : defaultPagination.page,
    limit: limit ? parseInt(limit) : defaultPagination.limit
  };
};
