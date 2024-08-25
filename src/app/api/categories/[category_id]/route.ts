import { authRoute } from '@/app/api/base_routes';
import { deletedResponse, notFoundResponse, objectResponse, updatedResponse } from '@/app/api/responses';
import { Category } from '@/models';

const itemName = 'Category';

interface IRequestParams {
  params: {
    category_id: string;
  };
}

export async function GET(request: Request, { params }: IRequestParams): Promise<any> {
  return await authRoute(async () => {
    try {
      const category = await Category.findById(params.category_id);
      return objectResponse(category);
    } catch (error) {
      return notFoundResponse(itemName);
    }
  });
}

export async function PUT(request: Request, { params }: IRequestParams): Promise<any> {
  return await authRoute(async () => {
    const categoryData = await request.json();

    let category;

    try {
      category = await Category.findByIdAndUpdate(params.category_id, categoryData, { new: true });
    } catch (error) {
      return notFoundResponse(itemName);
    }

    return updatedResponse(itemName, category);
  });
}

export async function DELETE(request: Request, { params }: IRequestParams): Promise<any> {
  return await authRoute(async () => {
    let category;

    try {
      category = await Category.findByIdAndDelete(params.category_id);
    } catch (error) {
      return notFoundResponse(itemName);
    }

    return deletedResponse(itemName, category);
  });
}
