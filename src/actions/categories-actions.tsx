'use server';

import { Category, ICategoryDoc } from '@/models';

export async function getCategories(): Promise<ICategoryDoc[]> {
  const categories = await Category.getAllCategories();
  return JSON.parse(JSON.stringify(categories));
}
