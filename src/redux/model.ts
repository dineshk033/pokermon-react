// export interface ReducerActionModel {
//     type:string;
//     payload:
// }

export interface ActionModel {
  type: string;
  payload?: PokemonModel[] | string | any;
}
export interface PokemonModel {
  name: string;
  height: number;
  weight: number;
  image: string;
  abilities: string[];
}

export interface PayloadModel {
  count?: number;
  next?: string;
  previous?: string;
  Pokemon: PokemonModel[];
}

export type DispatchType = (args: ActionModel) => ActionModel;
