import {
  contentfulTypeIds,
  createEntry,
  getAllEntriesFromOneContent,
} from '../../../helpers/contentful';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Post } from '@/models/contentfulObjects';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { message, game, file } = req.body;
    let asset = null;

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
              file: file,
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
      },
    };
    createEntry(contentfulTypeIds.post, postEntry);
  }
  if (req.method === 'GET') {
    const response = await getAllEntriesFromOneContent(contentfulTypeIds.post);
    res.status(200).json({ items: response });
  }
}
