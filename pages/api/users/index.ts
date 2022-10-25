import {
  getAllEntriesFromOneContent,
  contentfulTypeIds,
} from '../../../helpers/contentful';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getAllEntriesFromOneContent(contentfulTypeIds.user);
  res.status(200).json({ items: response });
}
