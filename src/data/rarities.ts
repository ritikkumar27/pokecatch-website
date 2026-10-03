// Encounter weights, not species counts. Reference: Gameplay.md.
export const rarities = [
  { name: 'Common', className: 'common', weight: 50, baseCatch: '50%', catchXp: 10, newEntryXp: 20 },
  { name: 'Uncommon', className: 'uncommon', weight: 28, baseCatch: '40%', catchXp: 20, newEntryXp: 40 },
  { name: 'Rare', className: 'rare', weight: 12, baseCatch: '30%', catchXp: 50, newEntryXp: 100 },
  { name: 'UltraRare', className: 'ultra', weight: 6, baseCatch: '20%', catchXp: 100, newEntryXp: 200 },
  { name: 'Epic', className: 'epic', weight: 2.5, baseCatch: '10%', catchXp: 200, newEntryXp: 400 },
  { name: 'Legendary', className: 'legendary', weight: 1, baseCatch: '5%', catchXp: 500, newEntryXp: 1000 },
  { name: 'Mythical', className: 'mythical', weight: 0.5, baseCatch: '2%', catchXp: 1000, newEntryXp: 2000 },
] as const;
