import { createClient } from 'contentful';

const SPACE_ID = process.env.SPACE_ID!;
const ENVIRONMENT_ID = process.env.ENVIRONMENT_ID!;
const ACCESS_TOKEN = process.env.DELIVERY_KEY!;

export async function createContentfulDeliveryClient() {
  const client = createClient({
    space: SPACE_ID,
    environment: ENVIRONMENT_ID,
    accessToken: ACCESS_TOKEN,
  });

  return client;
}

export async function getAllEntriesFromOneContent(contentTypeId: string) {
  const client = await createContentfulDeliveryClient();

  const response = await client.getEntries({
    content_type: contentTypeId,
  });

  return response.items;
}

export async function getEntryById(entryId: string) {
  const client = await createContentfulDeliveryClient();
  const response = await client.getEntry(entryId);
  return response;
}

export async function getEntrysByFieldIdValue(
  contentTypeId: string,
  fieldIdentificator: string,
  id: string
) {
  const client = await createContentfulDeliveryClient();

  const response = await client.getEntries({
    content_type: contentTypeId,
    [fieldIdentificator]: id,
  });

  return response.items;
}
