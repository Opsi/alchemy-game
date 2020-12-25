import { ExperimentState, initialExperimentState } from "./experiment";
import { initialMilestoneState, MilestoneState } from "./milestone";
import { initialSearchState, SearchState } from "./search";
import { initialSkillState, SkillState } from "./skills";

export type ActivityType = "none" | "search" | "experiment";

export interface State {
  search: SearchState;
  experiment: ExperimentState;
  skill: SkillState;
  milestone: MilestoneState;
  runningActivity: ActivityType;
}

export const initialState: State = {
  search: initialSearchState,
  experiment: initialExperimentState,
  skill: initialSkillState,
  milestone: initialMilestoneState,
  runningActivity: "none",
};