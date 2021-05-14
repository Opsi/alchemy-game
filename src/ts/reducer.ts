import { experimentTick } from './experiment';
import { searchTick } from './search';
import { Skill, skillTick } from './skills';
import { ActivityType, State } from './state';

export type Action =
  | { type: 'changeActivity'; activity: ActivityType }
  | { type: 'completeSkill'; skill: Skill }
  | { type: 'planExperiment' }
  | { type: 'tick' };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'changeActivity':
      return {
        ...state,
        runningActivity: action.activity,
      };
    case 'planExperiment':
      if (
        state.search.ingredients < state.experiment.ingredientsPerExperiment
      ) {
        return state;
      }
      return {
        ...state,
        search: {
          ...state.search,
          ingredients:
            state.search.ingredients
            - state.experiment.ingredientsPerExperiment,
        },
        experiment: {
          ...state.experiment,
          plannedExperiments: state.experiment.plannedExperiments + 1,
        },
      };
    case 'tick':
      return {
        ...state,
        search: searchTick(state.search, state.runningActivity),
        experiment: experimentTick(state.experiment, state.runningActivity),
        skill: skillTick(state),
      };
    case 'completeSkill':
      if (!action.skill.affordable(state)) {
        return state;
      }
      return action.skill.effect(state);
  }
  const s: never = action;
  return s;
}
