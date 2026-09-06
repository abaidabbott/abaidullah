import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { registerProfileTool } from '../public/webmcp.js';

test('unsupported browsers continue without registration', async () => {
  assert.equal(await registerProfileTool(undefined), false);
});
test('registered tool returns the public identity and contact information', async () => {
  let tool;
  const profile = JSON.parse(await readFile(new URL('../public/profile.json', import.meta.url)));
  assert.equal(await registerProfileTool({ registerTool: async value => { tool = value; } }, async () => ({ ok: true, json: async () => profile })), true);
  assert.equal(tool.annotations.readOnlyHint, true);
  const result = JSON.parse(await tool.execute());
  assert.equal(result.name, 'Abaid Ullah');
  assert.equal(result.primaryUsername, 'abaidabbott');
  assert.equal(result.url, 'https://abaidbutt.website/');
  assert.match(result.contact.email, /@/);
});
test('failed profile requests do not return misleading data', async () => {
  let tool;
  await registerProfileTool({ registerTool: async value => { tool = value; } }, async () => ({ ok: false }));
  await assert.rejects(() => tool.execute(), /temporarily unavailable/);
});
