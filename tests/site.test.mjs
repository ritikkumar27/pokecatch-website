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
  for (const alias of ['pb', 'gb', 'ub', 'net', 'dive', 'fast', 'dusk', 'nest', 'repeat', 'quick', 'mb']) {
    assert.match(html, new RegExp(`class="badge">${alias}<`), `missing ${alias} ball`);
  }
  for (const image of ['poke-ball', 'great-ball', 'ultra-ball', 'net-ball', 'dive-ball', 'fast-ball', 'dusk-ball', 'nest-ball', 'repeat-ball', 'quick-ball', 'master-ball']) {
    assert.match(html, new RegExp(`assets/balls/${image}\\.png`), `missing ${image} asset`);
  }
  assert.equal((html.match(/<article class="ball-card card"/g) || []).length, 11);
  for (const value of ['Lv 8 · 300', '3.5× for Water', '3× at Speed ≥120; otherwise 2× at Speed ≥80', 'Lv 25 · 50,000', '2.5×']) {
    assert.match(html, new RegExp(value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
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
