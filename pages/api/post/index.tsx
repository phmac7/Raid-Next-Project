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

    /*if (file) {
      const fileEntry = {
        fields: {
          title: {
            'en-US': 'Test1',
          },
          description: {
            'en-US': 'Asset description',
          },
          file: {
            'en-US': {
              contentType: 'image/jpg',
              fileName: 'test.jpg',
              upload: '/temp/tft.jpg',
            },
          },
        },
      };

      asset = await uploadAsset(fileEntry);
    }*/

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
    createEntry(contentfulTypeIds.post, postEntry);
  }
  if (req.method === 'GET') {
    const response = await getAllEntriesFromOneContent(contentfulTypeIds.post);
    res.status(200).json({ items: response });
  }
}
