import {
  REQUEST_POKEMON_PENDING,
  REQUEST_POKEMON_FAILED,
  REQUEST_POKEMON_SUCCESS,
  CHANGE_ROWS_PER_PAGE,
  SORT_BY_VALUE
} from './constants';
import { DispatchType } from './model';
import axios from 'axios';
interface PokemonListModel {
  count?: number;
  next?: string;
  previous?: string;
  results: any[];
}
interface PokemonDetailModel {
  abilities: object[];
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites: any;
  [key: string]: string | number | object | null;
}

// export const requestPokemon = () => (dispatch: DispatchType) => {
//   dispatch({ type: REQUEST_POKEMON_PENDING });
//   const mock: PokemonModel[] = GenerateMock(20);
//   new Promise((resolve) => setTimeout(resolve, 200))
//     .then(() => dispatch({ type: REQUEST_POKEMON_SUCCESS, payload: mock }))
//     .catch((error) => dispatch({ type: REQUEST_POKEMON_FAILED, payload: error }));
// };
export const changeRowsPerPage = (rows: number) => (dispatch: DispatchType) => {
  dispatch({ type: CHANGE_ROWS_PER_PAGE, payload: rows });
};
export const sortByValue = (sortBy: string) => (dispatch: DispatchType) => {
  dispatch({ type: SORT_BY_VALUE, payload: sortBy });
};
export const requestPokemon = (urlString: string) => async (dispatch: DispatchType) => {
  dispatch({ type: REQUEST_POKEMON_PENDING });
  try {
    const resp = await axios.get<PokemonListModel>(urlString);
    const { results, ...rest } = resp.data;
    const url = results.map((el: any) => getPokemonDetail(el.url));
    const cardData = await Promise.allSettled(url);
    const DATA = cardData.filter((el: any) => el.status === 'fulfilled').map((el: any) => el.value);
    const PAYLOAD = {
      ...rest,
      data: DATA
    };
    dispatch({ type: REQUEST_POKEMON_SUCCESS, payload: PAYLOAD });
  } catch (error: any) {
    dispatch({ type: REQUEST_POKEMON_FAILED, payload: error.message });
  }
};

const getPokemonDetail = async (url: string) => {
  const response = await axios.get<PokemonDetailModel>(url);
  const { abilities, name, id, height, weight, sprites } = response.data;
  const abilityKey = abilities
    .filter((el: any) => !el.is_hidden)
    .map((el: any) => el.ability['name']);
  var image = '';
  if (sprites.hasOwnProperty('other')) {
    // console.log(sprites['official-artwork']);
    image = sprites['other']['official-artwork']['front_default'];
  }
  return { abilities: abilityKey, name, id, height, weight, image };
};
