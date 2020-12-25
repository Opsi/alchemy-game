import { ActivityType, State } from "./state";

export type Action =
  | { type: "changeActivity"; activity: ActivityType }
  | { type: "tick" };

function searchTick(state: State): State {
  const newProgress = state.search.progress + 1;
  if (newProgress < state.search.neededProgress) {
    return {
      ...state,
      search: {
        ...state.search,
        progress: newProgress,
      },
    };
  }
  const newIngredients =
    state.search.ingredients + state.search.ingredientsPerSearch;
  return {
    ...state,
    search: {
      ...state.search,
      ingredients: newIngredients,
      progress: 0,
    },
  };
}

function experimentTick(state: State): State {
  let newIngredients = state.search.ingredients;
  if (state.experiment.progress === 0) {
    if (newIngredients < state.experiment.ingredientsPerExperiment) {
      return {
        ...state,
        runningActivity: "none",
      };
    }
    newIngredients -= state.experiment.ingredientsPerExperiment;
  }
  const newProgress = state.experiment.progress + 1;
  if (newProgress < state.experiment.neededProgress) {
    return {
      ...state,
      search: {
        ...state.search,
        ingredients: newIngredients,
      },
      experiment: {
        ...state.experiment,
        progress: newProgress,
      },
    };
  }
  const newKnowledge =
    state.experiment.knowledge + state.experiment.knowledgePerExperiment;
  return {
    ...state,
    search: {
      ...state.search,
      ingredients: newIngredients,
    },
    experiment: {
      ...state.experiment,
      knowledge: newKnowledge,
      progress: 0,
    },
  };
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "changeActivity":
      return {
        ...state,
        runningActivity: action.activity,
      };
    case "tick": {
      switch (state.runningActivity) {
        case "none":
          return state;
        case "search":
          return searchTick(state);
        case "experiment":
          return experimentTick(state);
      }
    }
  }
}