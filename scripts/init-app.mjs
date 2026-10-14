import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

export function validateIdentity(name, slug, androidPackage, iosBundleId) {
  if (!name?.trim() || name.length > 60) throw new Error('App name must be 1–60 characters');
  if (!/^[a-z][a-z0-9-]*$/.test(slug)) throw new Error('Invalid slug');
  for (const [label, id] of [['Android package', androidPackage], ['iOS bundle ID', iosBundleId]]) {
    const parts = typeof id === 'string' ? id.split('.') : [];
    if (parts.length < 2 || parts.some(p => !/^[a-zA-Z][a-zA-Z0-9_]*$/.test(p))) throw new Error(label + ' must be a reverse-domain identifier');
  }
}

export function initialize(root, identity) {
  const { name, slug, androidPackage, iosBundleId } = identity;
  validateIdentity(name, slug, androidPackage, iosBundleId);
  const envPath = resolve(root, '.env');
  if (existsSync(envPath)) throw new Error('.env already exists; refusing to overwrite an existing app');
  const lines = readFileSync(resolve(root, '.env.example'), 'utf8').split(String.fromCharCode(10));
  const values = { APP_NAME: name, APP_SLUG: slug, ANDROID_PACKAGE: androidPackage, IOS_BUNDLE_IDENTIFIER: iosBundleId };
  for (const [key, value] of Object.entries(values)) {
    const index = lines.findIndex(line => line.startsWith(key + '=') || line.startsWith('# ' + key + '='));
    if (index < 0) throw new Error('Missing configuration key: ' + key);
    lines[index] = key + '=' + value;
  }
  writeFileSync(envPath, lines.join(String.fromCharCode(10)));
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const [name, slug, androidPackage, iosBundleId] = process.argv.slice(2);
  try {
    initialize(process.cwd(), { name, slug, androidPackage, iosBundleId });
    console.log('Configured ' + name + '. Review .env and run npm ci && npm run ci.');
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
