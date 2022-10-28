//import { createClient } from 'contentful';
import { createClient } from 'contentful-management';

const SPACE_ID = 'mpk7fhk3qfhm';
const ENVIRONMENT_ID = 'MASTER';
const ACESS_TOKEN = 'CFPAT-9Hg5ETk_m-UOeL6SnmwX0-mEl0J2sxdf-fA-dz9ct9U';

export const contentfulTypeIds = {
  user: 'user',
  role: 'role',
  game: 'game',
  elo: 'elo',
  userPlayGames: 'userPlayGames',
};

export function createContentfulClient() {
  const client = createClient(
    {
      accessToken: ACESS_TOKEN,
    },
    {
      type: 'plain',
      defaults: {
        spaceId: SPACE_ID,
        environmentId: ENVIRONMENT_ID,
      },
    }
  );

  return client;
}

export async function getAllEntriesFromOneContent(contentTypeId: string) {
  const client = createContentfulClient();
  const response = await client.entry.getMany({
    query: {
      content_type: contentTypeId,
    },
  });
  return response.items;
}

export async function getEntryById(id: string) {
  const client = createContentfulClient();
  const response = await client.entry.get({
    entryId: id,
  });
  return response;
}

export async function getEntrysByFieldValue(
  contentTypeId: string,
  field: string,
  value: string
) {
  const client = createContentfulClient();
  const fieldIdentificator = `fields.${field}`;
  const response = await client.entry.getMany({
    query: {
      content_type: contentTypeId,
      [fieldIdentificator]: value,
    },
  });

  return response.items;
}

/*export async function getAllEntriesFromOneContent(contentTypeId: string) {
  const client = createContentfulClient();
  const response = await client.getEntries({ content_type: contentTypeId });
  return response.items;
}

export async function getAllEntriesFromOneContent(contentTypeId: string) {
  const client = createContentfulClient();
  const response = await client.getEntries({ content_type: contentTypeId });
  return response.items;
}

export async function getEntryById(id: string) {
  const client = createContentfulClient();
  const response = await client.getEntry(id);
  return response;
}

export async function getEntrysByFieldValue(
  contentTypeId: string,
  field: string,
  value: string
) {
  const client = createContentfulClient();
  const fieldIdentificator = `fields.${field}`;
  const response = await client.getEntries({
    content_type: contentTypeId,
    [fieldIdentificator]: value,
  });
  return response.items;
}
*/
