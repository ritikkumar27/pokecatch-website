// Content preserved from the approved landing page. Reference: Balls-and-Economy.md.
export const balls = [
  { category: 'core', visual: '', image: 'poke-ball', name: 'Poké Ball', alias: 'pb', description: 'The dependable start.', priceLabel: 'Price', price: '50', multiplier: '1×' },
  { category: 'core', visual: 'great', image: 'great-ball', name: 'Great Ball', alias: 'gb', description: 'More room for a rare find.', priceLabel: 'Unlock / price', price: 'Lv 3 · 150', multiplier: '1.5×' },
  { category: 'specialty', visual: 'dive', image: 'dive-ball', name: 'Dive Ball', alias: 'dive', description: 'Make a splash for Water types.', priceLabel: 'Unlock / price', price: 'Lv 5 · 250', multiplier: '3.5× water' },
  { category: 'specialty', visual: 'dusk', image: 'dusk-ball', name: 'Dusk Ball', alias: 'dusk', description: 'Best used from 18:00–05:59.', priceLabel: 'Unlock / price', price: 'Lv 5 · 250', multiplier: '3.5× at night' },
  { category: 'specialty', visual: 'net', image: 'net-ball', name: 'Net Ball', alias: 'net', description: 'For Water or Bug types.', priceLabel: 'Unlock / price', price: 'Lv 5 · 250', multiplier: '3× type bonus' },
  { category: 'late', visual: 'master', image: 'master-ball', name: 'Master Ball', alias: 'mb', description: 'The ultimate answer.', priceLabel: 'Unlock / price', price: 'Lv 25 · 50,000', multiplier: '100×' },
] as const;

export const ballFilters = [
  { value: 'all', label: 'All balls' },
  { value: 'core', label: 'Core kit' },
  { value: 'specialty', label: 'Specialty' },
  { value: 'late', label: 'Late game' },
] as const;
