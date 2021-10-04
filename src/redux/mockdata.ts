import { PokemonModel } from './model';

const mock = {
  name: 'chlorophyll',
  height: 7,
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  weight: 69,
  abilities: ['overgrow', 'bulbasaur']
};

export const GenerateMock = (num: number) => {
  return Array<PokemonModel>(num)
    .fill(mock)
    .map((el: any, idx) => ({ ...el, name: el['name'] + idx }));
};
