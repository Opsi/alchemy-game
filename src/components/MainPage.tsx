import { Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useReducer } from "react";
import Experiment from "./Experiment";
import Search from "./Search";

interface SearchState {
  ingredients: number;
  progress: number;
  neededProgress: number;
  ingredientsPerSearch: number;
}

const initialSearchState: SearchState = {
  ingredients: 0,
  progress: 0,
  neededProgress: 100,
  ingredientsPerSearch: 1,
};

interface ExperimentState {
  knowledge: number;
  progress: number;
  ingredientsPerExperiment: number;
  neededProgress: number;
  knowledgePerExperiment: number;
  blocked: boolean;
}

const initialExperimentState: ExperimentState = {
  knowledge: 0,
  progress: 0,
  ingredientsPerExperiment: 5,
  neededProgress: 100,
  knowledgePerExperiment: 2,
  blocked: false,
};

export type ActivityType = "none" | "search" | "experiment";

export interface State {
  search: SearchState;
  experiment: ExperimentState;
  runningActivity: ActivityType;
}

const initialState: State = {
  search: initialSearchState,
  experiment: initialExperimentState,
  runningActivity: "none",
};

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

function reducer(state: State, action: Action): State {
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

const MainPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: 'tick' })
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      <GridItem bg="tomato">
        <Search state={state} dispatch={dispatch} />
      </GridItem>
      <GridItem bg="papayawhip">
        <Experiment state={state} dispatch={dispatch} />
      </GridItem>
    </Grid>
  );
};

export default MainPage;
