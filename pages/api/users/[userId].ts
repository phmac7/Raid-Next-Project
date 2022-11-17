import { getEntryById } from '@/helpers/delivery';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = req.query;

  if (!userId) {
    res.status(422).json({ message: 'Missing id in request body' });
    return;
  }

  if (typeof userId === 'string') {
    const response = await getEntryById(userId);
    res.status(200).json({ entry: response });
  } else {
    res.status(502).json({
      message: "this id isn't in the right format, string must be a string",
    });
  }
}
