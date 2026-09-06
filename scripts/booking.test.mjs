import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';
const source = await readFile(new URL('../src/lib/booking.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
const { registerBookingTool } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);

test('booking opens calendar without claiming confirmation and cleans up', async () => {
  let tool, signal, opened = 0;
  const cleanup = registerBookingTool({ registerTool(value, options) { tool = value; signal = options.signal; } }, () => opened++);
  await Promise.resolve();
  const result = JSON.parse(await tool.execute());
  assert.equal(opened, 1);
  assert.equal(result.bookingConfirmed, false);
  assert.equal(result.url, 'https://calendly.com/bestabaidullahbutt');
  cleanup();
  assert.equal(signal.aborted, true);
  await assert.rejects(tool.execute, /no longer available/);
});
test('discarded StrictMode mount does not register stale booking tool', async () => {
  let registrations = 0;
  registerBookingTool({ registerTool() { registrations++; } }, () => {})();
  await Promise.resolve();
  assert.equal(registrations, 0);
});
test('browsers without WebMCP keep working', () => {
  registerBookingTool(undefined, () => assert.fail('must not open calendar'))();
});
