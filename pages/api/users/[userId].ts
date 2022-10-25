import { getEntryById } from '../../../helpers/contentful';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.body.id;

  if (!id) {
    res.status(422).json({ message: 'Missing id in request body' });
  }

  const response = await getEntryById(id);
  res.status(200).json({ items: response });
}
