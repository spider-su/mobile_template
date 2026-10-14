import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, readFileSync, existsSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { initialize, validateIdentity } from './init-app.mjs';
test('validates identifiers', () => {
  assert.throws(() => validateIdentity('App', 'Bad Slug', 'com.example.app', 'com.example.app'));
  assert.throws(() => validateIdentity('App', 'app', 'invalid', 'com.example.app'));
});
test('configures a new app and refuses overwrites', () => {
  const dir = mkdtempSync(join(tmpdir(), 'mobile-template-'));
  try {
    writeFileSync(join(dir, '.env.example'), 'APP_NAME=Template\nAPP_SLUG=template\nANDROID_PACKAGE=com.example.template\nIOS_BUNDLE_IDENTIFIER=com.example.template\n');
    writeFileSync(join(dir, 'package.json'), '{"name":"mobile-app-template"}');
    const id = { name:'My App', slug:'my-app', androidPackage:'com.example.myapp', iosBundleId:'com.example.myapp' };
    initialize(dir, id);
    assert.match(readFileSync(join(dir,'.env'),'utf8'), /APP_NAME=My App/);
    assert.match(readFileSync(join(dir,'.env'),'utf8'), /ANDROID_PACKAGE=com.example.myapp/);
    assert.throws(() => initialize(dir,id), /already exists/);
  } finally { rmSync(dir,{recursive:true,force:true}); }
});
