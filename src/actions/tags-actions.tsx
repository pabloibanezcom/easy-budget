'use server';

import { ITagDoc, Tag } from '@/models';

export async function getTags(): Promise<ITagDoc[]> {
  const tags = await Tag.getAllTags();
  return JSON.parse(JSON.stringify(tags));
}
