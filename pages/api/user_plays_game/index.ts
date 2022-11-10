import {
  contentfulTypeIds,
  getAllEntriesFromOneContent,
  getEntrysByFieldIdValue,
} from '../../../helpers/contentful';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { fieldIdentificator, value } = req.body;

  if (!fieldIdentificator || !value) {
    res.status(422).json({ message: 'Missing body' });
    return;
  }

  const response = await getEntrysByFieldIdValue(
    contentfulTypeIds.userPlayGames,
    fieldIdentificator,
    'qNcAeqto4efrhOzCCE9xA'
  );
  res.status(200).json({ items: response });
}
