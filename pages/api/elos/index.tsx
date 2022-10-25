import {
  contentfulTypeIds,
  getAllEntriesFromOneContent,
} from '../../../helpers/contentful';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getAllEntriesFromOneContent(contentfulTypeIds.elo);
  res.status(200).json({ items: response });
}
