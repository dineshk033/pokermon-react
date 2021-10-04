import {
  REQUEST_POKEMON_PENDING,
  REQUEST_POKEMON_FAILED,
  REQUEST_POKEMON_SUCCESS
} from './constants';
import { GenerateMock } from './mockdata';
import { DispatchType, PokemonModel } from './model';

export const requestPokemon = () => (dispatch: DispatchType) => {
  dispatch({ type: REQUEST_POKEMON_PENDING });
  const mock: PokemonModel[] = GenerateMock(20);
  new Promise((resolve) => setTimeout(resolve, 200))
    .then(() => dispatch({ type: REQUEST_POKEMON_SUCCESS, payload: mock }))
    .catch((error) => dispatch({ type: REQUEST_POKEMON_FAILED, payload: error }));
};
