export interface ExperimentState {
  knowledge: number;
  progress: number;
  ingredientsPerExperiment: number;
  neededProgress: number;
  knowledgePerExperiment: number;
  blocked: boolean;
}

export const initialExperimentState: ExperimentState = {
  knowledge: 0,
  progress: 0,
  ingredientsPerExperiment: 5,
  neededProgress: 100,
  knowledgePerExperiment: 2,
  blocked: false,
};