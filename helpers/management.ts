import { createClient } from 'contentful-management';

const SPACE_ID = 'mpk7fhk3qfhm';
const ENVIRONMENT_ID = 'MASTER';
const ACCESS_TOKEN = 'CFPAT-9Hg5ETk_m-UOeL6SnmwX0-mEl0J2sxdf-fA-dz9ct9U';

export async function createContentfulManagementClient() {
  const client = createClient({
    accessToken: ACCESS_TOKEN,
  });
  const space = await client.getSpace(SPACE_ID);
  const environment = await space.getEnvironment(ENVIRONMENT_ID);

  return environment;
}

export async function createEntry(contentTypeId: string, entryInfo: any) {
  const environment = await createContentfulManagementClient();
  const insertedEntry = await environment.createEntry(contentTypeId, entryInfo);
  await insertedEntry.publish();
  return insertedEntry;
}

export async function uploadAsset(fileEntry: any) {
  const environment = await createContentfulManagementClient();
  const insertedAsset = await environment.createAssetFromFiles(fileEntry);
  return insertedAsset;
}
