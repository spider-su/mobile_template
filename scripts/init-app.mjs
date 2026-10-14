import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

export function validateIdentity(name, slug, androidPackage, iosBundleId) {
  if (!name?.trim() || name.length > 60) throw new Error('App name must be 1–60 characters');
  if (!/^[a-z][a-z0-9-]*$/.test(slug)) throw new Error('Slug must use lowercase letters, numbers and hyphens, starting with a letter');
  for (const [label, id] of [['Android package', androidPackage], ['iOS bundle ID', iosBundleId]]) {
    if (!/^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)+$/.test(id)) throw new Error(label + ' must be a reverse-domain identifier');
  }
}
export function initialize(root, identity) {
  const { name, slug, androidPackage, iosBundleId } = identity;
  validateIdentity(name, slug, androidPackage, iosBundleId);
  const envPath = resolve(root, '.env');
  if (existsSync(envPath)) throw new Error('.env already exists; refusing to overwrite an existing app');
  const example = readFileSync(resolve(root, '.env.example'), 'utf8');
  const values = { APP_NAME: name, APP_SLUG: slug, ANDROID_PACKAGE: androidPackage, IOS_BUNDLE_IDENTIFIER: iosBundleId };
  let output = example;
  for (const [key, value] of Object.entries(values)) {
    const lines = output.split(String.fromCharCode(10));
    const index = lines.findIndex(line => line.startsWith(key + '=') || line.startsWith('# ' + key + '='));
    if (index < 0) throw new Error('Missing configuration key: ' + key);
    lines[index] = key + '=' + value;
    output = lines.join(String.fromCharCode(10));
  }
  writeFileSync(envPath, output);
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
, 'm').test(output)) throw new Error('Missing configuration key: ' + key);
    output = output.replace(line, key + '=' + value);
  }
  const packagePath = resolve(root, 'package.json');
  const pkg = JSON.parse(readFileSync(packagePath, 'utf8'));
  pkg.name = slug;
  writeFileSync(envPath, output);
  writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + '\n');
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
, 'm'), key + '=' + value);
  }
  const packagePath = resolve(root, 'package.json');
  const pkg = JSON.parse(readFileSync(packagePath, 'utf8'));
  pkg.name = slug;
  writeFileSync(envPath, output);
  writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + '\n');
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
, 'm').test(output)) throw new Error('Missing configuration key: ' + key);
    output = output.replace(line, key + '=' + value);
  }
  const packagePath = resolve(root, 'package.json');
  const pkg = JSON.parse(readFileSync(packagePath, 'utf8'));
  pkg.name = slug;
  writeFileSync(envPath, output);
  writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + '\n');
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
