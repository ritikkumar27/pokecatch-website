// PokeAPI type IDs used by the supplied sprite folder. The catalog has 18
// documented types; the workspace currently supplies pixel markers for IDs 1–17.
export const pokemonTypes = [
  { id: 1, name: 'Normal', image: '1.png' },
  { id: 2, name: 'Fighting', image: '2.png' },
  { id: 3, name: 'Flying', image: '3.png' },
  { id: 4, name: 'Poison', image: '4.png' },
  { id: 5, name: 'Ground', image: '5.png' },
  { id: 6, name: 'Rock', image: '6.png' },
  { id: 7, name: 'Bug', image: '7.png' },
  { id: 8, name: 'Ghost', image: '8.png' },
  { id: 9, name: 'Steel', image: '9.png' },
  { id: 10, name: 'Fire', image: '10.png' },
  { id: 11, name: 'Water', image: '11.png' },
  { id: 12, name: 'Grass', image: '12.png' },
  { id: 13, name: 'Electric', image: '13.png' },
  { id: 14, name: 'Psychic', image: '14.png' },
  { id: 15, name: 'Ice', image: '15.png' },
  { id: 16, name: 'Dragon', image: '16.png' },
  { id: 17, name: 'Dark', image: '17.png' },
  { id: 18, name: 'Fairy', image: null },
] as const;
