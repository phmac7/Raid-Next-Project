//import { createClient } from 'contentful';
import { createClient } from 'contentful-management';

const SPACE_ID = 'mpk7fhk3qfhm';
const ENVIRONMENT_ID = 'MASTER';
const ACCESS_TOKEN = 'CFPAT-9Hg5ETk_m-UOeL6SnmwX0-mEl0J2sxdf-fA-dz9ct9U';

export const contentfulTypeIds = {
  user: 'user',
  role: 'role',
  game: 'game',
  elo: 'elo',
  userPlayGames: 'userPlayGames',
};

export async function createContentfulClient() {
  const client = createClient({
    accessToken: ACCESS_TOKEN,
  });
  const space = await client.getSpace(SPACE_ID);
  const environment = await space.getEnvironment(ENVIRONMENT_ID);

  return environment;
}

export async function getAllEntriesFromOneContent(contentTypeId: string) {
  const environment = await createContentfulClient();
  const response = await environment.getPublishedEntries({
    content_type: contentTypeId,
  });

  return response.items;
}

export async function getEntryById(entryId: string) {
  const environment = await createContentfulClient();
  const response = await environment.getEntry(entryId);
  return response;
}

export async function getEntrysByFieldValue(
  contentTypeId: string,
  field: string,
  value: string
) {
  const environment = await createContentfulClient();
  const fieldIdentificator = `fields.${field}`;
  const response = await environment.getPublishedEntries({
    content_type: contentTypeId,
    [fieldIdentificator]: value,
  });

  return response.items;
}
