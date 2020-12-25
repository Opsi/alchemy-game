import { ActivityType } from "./state";

export interface SearchState {
  ingredients: number;
  progress: number;
  neededProgress: number;
  ingredientChance: number;
  maxIngredientsPerSearch: number;
  total: {
    ingredients: number;
    alchemistIngredients: number;
    ratIngredients: number;
  }
}

export const initialSearchState: SearchState = {
  ingredients: 0,
  progress: 0,
  neededProgress: 10,
  ingredientChance: .1,
  maxIngredientsPerSearch: 1,
  total: {
    ingredients: 0,
    alchemistIngredients: 0,
    ratIngredients: 0,
  }
};

export function searchTick(state: SearchState, activity: ActivityType): SearchState {
  if (activity !== 'search') {
    return state;
  }
  const newProgress = state.progress + 1;
  if (newProgress < state.neededProgress) {
    return {
      ...state,
      progress: newProgress,
    };
  }
  if (Math.random() > state.ingredientChance) {
    return {
      ...state,
      progress: 0,
    };  
  }
  const foundIngredients = Math.ceil(state.maxIngredientsPerSearch * Math.random())
  return {
      ...state,
      ingredients: state.ingredients + foundIngredients,
      progress: 0,
      total: {
        ...state.total,
        alchemistIngredients: state.total.alchemistIngredients + foundIngredients,
        ingredients: state.total.ingredients + foundIngredients,
      }
  };
}