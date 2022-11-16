import { getEntryById } from '../../../helpers/contentful';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { assetId } = req.query;

  if (!assetId) {
    res.status(422).json({ message: 'Missing id in request body' });
    return;
  }

  if (typeof assetId === 'string') {
    const response = await getEntryById(assetId);
    res.status(200).json({ items: response });
  } else {
    res.status(502).json({
      message: "this id isn't in the right format, must be a string",
    });
  }
}
