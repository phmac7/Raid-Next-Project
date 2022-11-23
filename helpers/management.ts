import { createClient } from 'contentful-management';

const SPACE_ID = process.env.SPACE_ID!;
const ENVIRONMENT_ID = process.env.ENVIRONMENT_ID!;
const ACCESS_TOKEN = process.env.MANAGEMENT_KEY!;

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
