import { State } from './state';

export interface Skill {
  title: string;
  tooltip: string;
  type: 'skill' | 'item';
  priceTag: string;
  logMessage: string;
  learnable: (state: State) => boolean;
  affordable: (state: State) => boolean;
  effect: (state: State) => State;
}

export interface SkillState {
  unknown: Skill[];
  known: Skill[];
  completed: Skill[];
}

const ALL_SKILLS: Skill[] = [
  {
    title: 'Potion Recipe: Vision-Potion',
    tooltip: 'You learn the potion recipe "Vision Potion". This potion increases the chance to find ingredients.',
    type: 'skill',
    priceTag: '5 Knowledge',
    logMessage: 'TODO!!!',
    learnable: (state: State) => state.experiment.total.knowledge > 0,
    affordable: (state: State) => state.experiment.knowledge >= 5,
    effect: (state: State) => state,
  },
  {
    title: 'Potion Recipe: Speed-Potion',
    tooltip: 'You learn the potion recipe "Vision Potion". This potion increases the ingredient search speed.',
    type: 'skill',
    priceTag: '5 Knowledge',
    logMessage: 'TODO!!!',
    learnable: (state: State) => state.experiment.total.knowledge > 0,
    affordable: (state: State) => state.experiment.knowledge >= 5,
    effect: (state: State) => state,
  },
];

export const initialSkillState: SkillState = {
  unknown: ALL_SKILLS,
  known: [],
  completed: [],
};

export function skillTick(state: State): SkillState {
  if (!state.skill.unknown.some((skill) => skill.learnable(state))) {
    return state.skill;
  }
  const newUnknown = state.skill.unknown.filter((skill) => !skill.learnable(state));
  const newKnown = state.skill.unknown.filter((skill) => skill.learnable(state));
  return {
    ...state.skill,
    unknown: newUnknown,
    known: state.skill.known.concat(newKnown),
  };
}
