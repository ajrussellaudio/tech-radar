import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: '4cx5zwmg',
  dataset: 'production',
  apiVersion: new Date().toISOString().split('T')[0],
  useCdn: false,
});
