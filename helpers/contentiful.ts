import { createClient, ContentfulClientApi } from 'contentful';

const SPACE_ID = 'mpk7fhk3qfhm';
const ACESS_TOKEN = 'lj4RJ475ZCecOH0dYN9fab7pmOsiltDThXFEN2ZwzZs';

export function createContentfulClient() {
  const client = createClient({
    space: SPACE_ID,
    accessToken: ACESS_TOKEN,
  });

  return client;
}

export async function getAllEntriesFromOneContent(
  client: ContentfulClientApi,
  contentTypeId: string
) {
  const response = await client.getEntries({ content_type: contentTypeId });
  return response.items;
}

export async function getEntryById(client: ContentfulClientApi, id: string) {
  const response = await client.getEntry(id);
  return response;
}

export async function getEntrysByFieldValue(
  client: ContentfulClientApi,
  contentTypeId: string,
  field: string,
  value: string
) {
  const fieldIdentificator = `fields.${field}`;
  const response = await client.getEntries({
    content_type: contentTypeId,
    [fieldIdentificator]: value,
  });
  return response.items;
}
