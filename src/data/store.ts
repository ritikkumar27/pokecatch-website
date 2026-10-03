// Store sale values and transaction rules. Reference: Balls-and-Economy.md.
export const saleValues = [
  { rarity: 'Common', value: 150 },
  { rarity: 'Uncommon', value: 300 },
  { rarity: 'Rare', value: 800 },
  { rarity: 'UltraRare', value: 1500 },
  { rarity: 'Epic', value: 3000 },
  { rarity: 'Legendary', value: 10000 },
  { rarity: 'Mythical', value: 25000 },
] as const;

export const storeRules = [
  { label: 'Purchase quantity', value: '1–999 per command' },
  { label: 'Stock', value: 'No finite stock' },
  { label: 'Rotation', value: 'None' },
  { label: 'Discounts', value: 'None implemented' },
  { label: 'Buyback', value: 'None' },
  { label: 'Sales award', value: 'Currency, not XP' },
] as const;
