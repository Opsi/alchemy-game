import {
  Grid,
  GridItem,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';
import React, { Dispatch } from 'react';
import { Action } from '../../ts/reducer';
import { State } from '../../ts/state';
import { BorderBox } from '../common/BorderBox';
import { Button } from '../common/Button';
import { BORDER_COLOR } from './colors';

interface Props {
  state: State
  dispatch: Dispatch<Action>
}

export const Experiment: React.FC<Props> = ({ state, dispatch }) => {
  const warning = state.runningActivity === 'experiment'
    && state.experiment.plannedExperiments === 0;

  return (
    <BorderBox
      borderColor={BORDER_COLOR}
      color={BORDER_COLOR}
    >
      <Grid
        templateRows="repeat(2, 4fr)"
        templateColumns="repeat(2, 1fr)"
        gap={2}
      >
        <GridItem rowSpan={2}>
          <Button
            warning={warning}
            disabled={state.runningActivity === 'experiment'}
            onClick={() => dispatch({ type: 'changeActivity', activity: 'experiment' })}
          >
            Experiment
          </Button>
        </GridItem>
        <GridItem rowSpan={2}>
          <Progress
            max={state.experiment.neededProgress}
            value={state.experiment.progress}
            colorScheme={
              state.runningActivity === 'experiment' ? 'blue' : 'gray'
            }
          />
        </GridItem>
        <GridItem rowSpan={2}>
          <Button
            disabled={
              state.search.ingredients
              < state.experiment.ingredientsPerExperiment
            }
            onClick={() => dispatch({ type: 'planExperiment' })}
          >
            Schedule
          </Button>
        </GridItem>
        <GridItem className="GridItem">
          <Text>
            Cost:
            {' '}
            {state.experiment.ingredientsPerExperiment}
            {' '}
            Ingredients
          </Text>
        </GridItem>
        <GridItem className="GridItem">
          <Text>
            Scheduled:
            {' '}
            {state.experiment.plannedExperiments}
            {' '}
            Experiments
          </Text>
        </GridItem>
      </Grid>
      <Stat>
        <StatLabel>Knowledge</StatLabel>
        <StatNumber>{state.experiment.knowledge}</StatNumber>
      </Stat>
    </BorderBox>
  );
};
