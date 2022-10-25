import {
  createContentfulClient,
  getAllEntriesFromContent,
} from '../../../helpers/contentiful';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = createContentfulClient();

  if (req.method === 'GET') {
    const response = await getAllEntriesFromContent(client, 'user');
    res.status(200).json({ items: response });
  }
}
