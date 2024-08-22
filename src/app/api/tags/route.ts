import { authRoute } from '@/app/api/base_routes';
import { createdResponse, objectResponse } from '@/app/api/responses';
import { ITagBase, Tag } from '@/models';

const itemName = 'Tag';

export async function GET() {
  return await authRoute(async () => {
    const tags = await Tag.getAllTags();
    return objectResponse(tags);
  });
}

export async function POST(request: Request) {
  return await authRoute(async () => {
    const { name, color }: ITagBase = await request.json();
    const tagData: ITagBase = {
      name,
      color
    };

    const tag = await Tag.create(tagData);
    return createdResponse(itemName, tag);
  });
}
