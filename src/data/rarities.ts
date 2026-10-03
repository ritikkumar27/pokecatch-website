// Encounter weights, not species counts. Reference: Gameplay.md.
export const rarities = [
  { name: 'Common', className: 'common', weight: 50 },
  { name: 'Uncommon', className: 'uncommon', weight: 28 },
  { name: 'Rare', className: 'rare', weight: 12 },
  { name: 'UltraRare', className: 'ultra', weight: 6 },
  { name: 'Epic', className: 'epic', weight: 2.5 },
  { name: 'Legendary', className: 'legendary', weight: 1 },
  { name: 'Mythical', className: 'mythical', weight: 0.5 },
] as const;
