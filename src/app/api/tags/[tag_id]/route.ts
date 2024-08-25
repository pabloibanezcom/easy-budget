import { authRoute } from '@/app/api/base_routes';
import { deletedResponse, notFoundResponse, objectResponse, updatedResponse } from '@/app/api/responses';
import { Tag } from '@/models';

const itemName = 'Tag';

interface IRequestParams {
  params: {
    tag_id: string;
  };
}

export async function GET(request: Request, { params }: IRequestParams): Promise<any> {
  return await authRoute(async () => {
    const tag = await Tag.findById(params.tag_id);

    if (!tag) {
      return notFoundResponse(itemName);
    }

    return objectResponse(tag);
  });
}

export async function PUT(request: Request, { params }: IRequestParams): Promise<any> {
  return await authRoute(async () => {
    const tagData = await request.json();

    let tag;

    try {
      tag = await Tag.findByIdAndUpdate(params.tag_id, tagData, { new: true });
    } catch (error) {
      return notFoundResponse(itemName);
    }

    return updatedResponse(itemName, tag);
  });
}

export async function DELETE(request: Request, { params }: IRequestParams): Promise<any> {
  return await authRoute(async () => {
    let tag;

    try {
      tag = await Tag.findByIdAndDelete(params.tag_id);
    } catch (error) {
      return notFoundResponse(itemName);
    }

    return deletedResponse(itemName, tag);
  });
}
