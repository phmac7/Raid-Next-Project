import { getAllEntriesFromOneContent } from '@/helpers/delivery';
import contentfulTypeIds from '@/helpers/contentfulTypes';

import type { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getAllEntriesFromOneContent(contentfulTypeIds.role);
  res.status(200).json({ items: response });
}
