// Complete STORE_ITEMS catalog. Reference: Documentation/02-Player-Guide/Balls-and-Economy.md.
export const balls = [
  { category: 'core', visual: '', image: 'poke-ball', name: 'Poké Ball', alias: 'pb', unlockLevel: 1, price: 50, effect: 'Standard catch chance.', multiplier: '1×' },
  { category: 'core', visual: 'great', image: 'great-ball', name: 'Great Ball', alias: 'gb', unlockLevel: 3, price: 150, effect: 'Improved catch chance.', multiplier: '1.5×' },
  { category: 'core', visual: 'ultra', image: 'ultra-ball', name: 'Ultra Ball', alias: 'ub', unlockLevel: 8, price: 300, effect: 'Higher catch chance.', multiplier: '2×' },
  { category: 'specialty', visual: 'net', image: 'net-ball', name: 'Net Ball', alias: 'net', unlockLevel: 5, price: 250, effect: 'For Water or Bug types.', multiplier: '3× for Water or Bug' },
  { category: 'specialty', visual: 'dive', image: 'dive-ball', name: 'Dive Ball', alias: 'dive', unlockLevel: 5, price: 250, effect: 'For Water types.', multiplier: '3.5× for Water' },
  { category: 'specialty', visual: 'fast', image: 'fast-ball', name: 'Fast Ball', alias: 'fast', unlockLevel: 5, price: 250, effect: 'Uses the encounter’s Speed stat.', multiplier: '3× at Speed ≥120; otherwise 2× at Speed ≥80' },
  { category: 'specialty', visual: 'dusk', image: 'dusk-ball', name: 'Dusk Ball', alias: 'dusk', unlockLevel: 5, price: 250, effect: 'Machine-local time from 18:00 through 05:59.', multiplier: '3.5× at night' },
  { category: 'specialty', visual: 'nest', image: 'nest-ball', name: 'Nest Ball', alias: 'nest', unlockLevel: 10, price: 250, effect: 'Uses the encounter’s base stat total (BST).', multiplier: '3× at BST ≤300; otherwise 2× at BST ≤400' },
  { category: 'specialty', visual: 'repeat', image: 'repeat-ball', name: 'Repeat Ball', alias: 'repeat', unlockLevel: 10, price: 250, effect: 'For a species currently owned.', multiplier: '3× if the species is currently owned' },
  { category: 'late', visual: 'quick', image: 'quick-ball', name: 'Quick Ball', alias: 'quick', unlockLevel: 15, price: 400, effect: 'Flat multiplier with no first-turn condition.', multiplier: '2.5×' },
  { category: 'late', visual: 'master', image: 'master-ball', name: 'Master Ball', alias: 'mb', unlockLevel: 25, price: 50000, effect: 'Guarantees current configured encounters.', multiplier: '100×' },
] as const;

export const ballFilters = [
  { value: 'all', label: 'All balls' },
  { value: 'core', label: 'Core kit' },
  { value: 'specialty', label: 'Specialty' },
  { value: 'late', label: 'Late game' },
] as const;
