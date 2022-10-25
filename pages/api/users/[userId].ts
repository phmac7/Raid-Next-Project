import {
  createContentfulClient,
  getEntryById,
} from '../../../helpers/contentiful';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = createContentfulClient();

  if (req.method === 'GET') {
    const id = req.body.id;
    const response = await getEntryById(client, id);
    res.status(200).json({ items: response });
  }
}
