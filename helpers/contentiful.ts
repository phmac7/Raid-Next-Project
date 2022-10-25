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

export async function getAllEntriesFromContent(
  client: ContentfulClientApi,
  contentTypeId: string
) {
  const response = await client.getEntries({ content_type: contentTypeId });
  return response.items;
}
