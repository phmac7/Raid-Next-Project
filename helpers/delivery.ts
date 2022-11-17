import { createClient } from 'contentful';

const SPACE_ID = 'mpk7fhk3qfhm';
const ENVIRONMENT_ID = 'master';
const ACCESS_TOKEN = 'VWv7sJDlvf5tdQZATDOpzz28i1Tlg_2GuapZX8HK4XA';

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
