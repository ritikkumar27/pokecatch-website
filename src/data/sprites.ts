export interface PokemonSprite {
  name: string;
  file: string;
}

export const fieldGuideRoster: PokemonSprite[] = [
  { name: 'Charmander', file: 'charmander.png' },
  { name: 'Eevee', file: 'eevee.png' },
  { name: 'Squirtle', file: 'squirtle.png' },
  { name: 'Snorlax', file: 'snorlax.png' },
  { name: 'Lucario', file: 'lucario.png' },
  { name: 'Greninja', file: 'greninja.png' },
  { name: 'Espeon', file: 'espeon.png' },
  { name: 'Sceptile', file: 'sceptile.png' },
];

export const chaseRoster: PokemonSprite[] = [
  { name: 'Dragonite', file: 'dragonite.png' },
  { name: 'Dragapult', file: 'dragapult.png' },
  { name: 'Mewtwo', file: 'mewtwo.png' },
  { name: 'Mimikyu', file: 'mimikyu.png' },
  { name: 'Pecharunt', file: 'pecharunt.png' },
  { name: 'Enamorus', file: 'enamorus.png' },
  { name: 'Tyranitar', file: 'tyranitar.png' },
  { name: 'Arceus', file: 'arceus.png' },
];
