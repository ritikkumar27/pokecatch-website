// Command reference from Documentation/02-Player-Guide/Commands.md.
export const commands = [
  { command: 'hunt', alias: '—', purpose: 'Creates or replaces the pending encounter after a 15-second cooldown; grants 5 XP and updates counters.' },
  { command: 'catch <ball>', alias: 'Ball aliases', purpose: 'Spends one available ball and resolves the current encounter.' },
  { command: 'pokedex', alias: 'dex', purpose: 'Shows the collection list or a named owned-Pokémon detail view.' },
  { command: 'inventory', alias: 'inv', purpose: 'Shows currency, XP, level, and positive ball counts.' },
  { command: 'stats', alias: 's', purpose: 'Shows the trainer and lifetime-stat dashboard.' },
  { command: 'store', alias: '—', purpose: 'Shows the fixed ball catalog and sale prices.' },
  { command: 'store buy <item> [amount]', alias: 'Item aliases', purpose: 'Purchases 1–999 balls; amount defaults to 1.' },
  { command: 'store sell <pokemon_name>', alias: '—', purpose: 'Immediately sells the first matching owned Pokémon.' },
  { command: 'store sellall <rarity>', alias: '—', purpose: 'Sells all owned entries in the selected rarity tier.' },
  { command: 'store sell-dupes', alias: '—', purpose: 'Offers to sell surplus copies while preserving one per ID.' },
] as const;
