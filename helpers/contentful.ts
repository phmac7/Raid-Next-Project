import { createClient } from 'contentful';

const SPACE_ID = 'mpk7fhk3qfhm';
const ACESS_TOKEN = 'lj4RJ475ZCecOH0dYN9fab7pmOsiltDThXFEN2ZwzZs';

export const contentfulTypeIds = {
  user: 'user',
  role: 'role',
  game: 'game',
  elo: 'elo',
  userPlayGames: 'userPlayGames',
};

export function createContentfulClient() {
  const client = createClient({
    space: SPACE_ID,
    accessToken: ACESS_TOKEN,
  });

  return client;
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
