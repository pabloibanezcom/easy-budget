import { authRoute } from '@/app/api/base_routes';
import { createdResponse, objectResponse } from '@/app/api/responses';
import { Category, ICategoryBase } from '@/models';

const itemName = 'Category';

export async function GET(): Promise<any> {
  return await authRoute(async () => {
    const categories = await Category.getAllCategories();
    return objectResponse(categories);
  });
}

export async function POST(request: Request): Promise<any> {
  return await authRoute(async () => {
    const { name, color }: ICategoryBase = await request.json();
    const categoryData: ICategoryBase = {
      name,
      color
    };

    const category = await Category.create(categoryData);
    return createdResponse(itemName, category);
  });
}
