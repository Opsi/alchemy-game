export interface SearchState {
  ingredients: number;
  progress: number;
  neededProgress: number;
  ingredientsPerSearch: number;
}

export const initialSearchState: SearchState = {
  ingredients: 0,
  progress: 0,
  neededProgress: 100,
  ingredientsPerSearch: 1,
};
