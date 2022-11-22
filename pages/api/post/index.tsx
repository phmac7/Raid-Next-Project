import { getAllEntriesFromOneContent } from '@/helpers/delivery';
import { createEntry, uploadAsset } from '@/helpers/management';
import contentfulTypeIds from '@/helpers/contentfulTypes';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { message, game, file } = req.body;

    if (!message || !game) {
      res.status(200).json({
        status: 'error',
        title: 'Missing Fields',
        message:
          'Error in create a new post. Fill all fields before create another one.',
      });
      return;
    }

    const postEntry = {
      fields: {
        author: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '4122dyrXJiL0Sr06dde27u', //userID from req
            },
          },
        },
        game: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: game, //gameID from req
            },
          },
        },
        message: {
          'en-US': message,
        },
        media: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '5mB5F6X4xHA4XeJjouxkDV', //gameID from req
            },
          },
        },
      },
    };

    const response = await createEntry(contentfulTypeIds.post, postEntry);
    res.status(200).json({
      status: 'success',
      title: 'New Post Created',
      message: 'Your post was created. You can see that in your profile page.',
      post: response,
    });
  }
  if (req.method === 'GET') {
    const response = await getAllEntriesFromOneContent(contentfulTypeIds.post);
    res.status(200).json({ items: response });
  }
}
