import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');
const htmlPath = join(dist, 'index.html');

test('Astro output contains the approved landing page sections', () => {
  assert.ok(existsSync(htmlPath), 'run pnpm build before pnpm test');
  const html = readFileSync(htmlPath, 'utf8');
  for (const text of ['Catch the moment.', 'Three commands.', 'Bring the right', 'Some stories are', 'Small setup.', 'pokecatch hunt']) {
    assert.match(html, new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
});

test('Astro output includes local asset URLs and bundled scripts', () => {
  const html = readFileSync(htmlPath, 'utf8');
  assert.match(html, /assets\/sprites\/pikachu\.png/);
  assert.match(html, /assets\/balls\/master-ball\.png/);
  const assets = readdirSync(join(dist, '_astro'));
  assert.match(html, /<script type="module">/, 'Astro should emit the browser script');
  assert.ok(assets.some((file) => file.endsWith('.css')), 'Astro should bundle CSS');
  assert.ok(existsSync(join(dist, '.nojekyll')));
});

test('interactive source preserves mobile navigation and ball filtering', () => {
  const navigation = readFileSync(join(root, 'src/scripts/navigation.ts'), 'utf8');
  const filters = readFileSync(join(root, 'src/scripts/ball-filters.ts'), 'utf8');
  assert.match(navigation, /aria-expanded/);
  assert.match(navigation, /mobileMenu\.hidden/);
  assert.match(filters, /data-filter/);
  assert.match(filters, /card\.hidden/);
});
