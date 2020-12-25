import { ActivityType } from "./state";

export interface ExperimentState {
  active: boolean;
  plannedExperiments: number;
  knowledge: number;
  progress: number;
  ingredientsPerExperiment: number;
  neededProgress: number;
  knowledgePerExperiment: number;
  total: {
    knowledge: number;
    usedIngredients: number;
    alchemistKnowledge: number;
    ratKnowledge: number;
  }
}

export const initialExperimentState: ExperimentState = {
  active: false,
  plannedExperiments: 0,
  knowledge: 0,
  progress: 0,
  ingredientsPerExperiment: 5,
  neededProgress: 100,
  knowledgePerExperiment: 2,
  total: {
    knowledge: 0,
    usedIngredients: 0,
    alchemistKnowledge: 0,
    ratKnowledge: 0,
  }
};

export function experimentTick(state: ExperimentState, activity: ActivityType): ExperimentState {
  if (activity !== 'experiment' || state.plannedExperiments === 0) {
    return state;
  }
  const newProgress = state.progress + 1;
  if (newProgress < state.neededProgress) {
    return {
      ...state,
      progress: newProgress,
    };
  }
  return {
    ...state,
    knowledge: state.knowledge + state.knowledgePerExperiment,
    plannedExperiments: state.plannedExperiments - 1,
    progress: 0,
    total: {
      ...state.total,
      knowledge: state.total.knowledge + state.knowledgePerExperiment,
      alchemistKnowledge: state.total.alchemistKnowledge + state.knowledgePerExperiment,
    }
  };
}