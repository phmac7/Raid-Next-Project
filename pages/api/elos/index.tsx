import { getAllEntriesFromOneContent } from '@/helpers/delivery';
import contentfulTypeIds from '@/helpers/contentfulTypes';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getAllEntriesFromOneContent(contentfulTypeIds.elo);
  res.status(200).json({ items: response });
}
