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
  for (const text of ['Hunt in Wild.', 'Hunt. Catch.', 'Generate the encounter', 'Resolve the catch', 'Check your Pokédex', 'Rarity, rewards', 'ENCOUNTER DISTRIBUTION', '03A / Ball economy', 'STORE DATA', 'CATCH MATH', 'PROGRESSION / CUMULATIVE XP', 'Every command in your kit.', 'GENERAL SYNTAX', 'Installation guide', 'From zero to your first encounter.', 'pipx ensurepath', 'pokecatch --help', 'pokecatch inventory', 'pokecatch store', 'pokecatch hunt']) {
    assert.match(html, new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
});

test('Astro output includes local asset URLs and bundled scripts', () => {
  const html = readFileSync(htmlPath, 'utf8');
  assert.match(html, /assets\/sprites\/pikachu\.png/);
  for (const sprite of ['bulbasaur', 'pikachu', 'mew']) {
    assert.match(html, new RegExp(`assets/sprites/${sprite}\\.png`), `missing ${sprite} loop sprite`);
  }
  for (const sprite of ['arceus', 'bulbasaur', 'charmander', 'dragapult', 'dragonite', 'eevee', 'enamorus', 'espeon', 'greninja', 'lucario', 'mew', 'mewtwo', 'mimikyu', 'pecharunt', 'pikachu', 'rayquaza', 'sceptile', 'snorlax', 'squirtle', 'tyranitar']) {
    assert.match(html, new RegExp(`assets/sprites/${sprite}\\.png`), `missing ${sprite} sprite`);
  }
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
  for (const value of ['50%','40%','30%','20%','10%','5%','2%','1,000','2,000','1–999 per command','25,000','11,757 XP','level_bonus','base_rate']) {
    assert.match(html, new RegExp(value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
  for (const command of ['hunt', 'catch &lt;ball&gt;', 'pokedex', 'inventory', 'stats', 'store', 'store buy', 'store sell', 'store sellall', 'store sell-dupes']) {
    assert.match(html, new RegExp(`pokecatch ${command.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`), `missing ${command} command`);
  }
  for (let id = 1; id <= 17; id += 1) {
    assert.match(html, new RegExp(`assets/pokemon-types/${id}\\.png`), `missing type marker ${id}`);
  }
  for (const name of ['Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark', 'Fairy']) {
    assert.match(html, new RegExp(`>${name}<`), `missing ${name} type`);
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
