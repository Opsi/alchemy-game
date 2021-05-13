import { CalendarIcon } from "@chakra-ui/icons";
import {
  Grid,
  GridItem,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { Dispatch } from "react";
import { Action } from "../ts/reducer";
import { State } from "../ts/state";
import { Button } from "./common/Button";

const Experiment = (props: { state: State; dispatch: Dispatch<Action> }) => {
  const { state, dispatch } = props;
  const warning =
    state.runningActivity === "experiment" &&
    state.experiment.plannedExperiments === 0;

  return (
    <VStack borderWidth="1px" p="4" bg="LightSkyBlue" alignContent="center">
      <Grid
        templateRows="repeat(2, 4fr)"
        templateColumns="repeat(2, 1fr)"
        gap={2}
      >
        <GridItem rowSpan={2}>
          <Button
            warning={warning}
            disabled={state.runningActivity === "experiment"}
            onClick={() =>
              dispatch({ type: "changeActivity", activity: "experiment" })
            }
          >
            Experiment
          </Button>
        </GridItem>
        <GridItem rowSpan={2}>
          <Progress
            max={state.experiment.neededProgress}
            value={state.experiment.progress}
            colorScheme={
              state.runningActivity === "experiment" ? "blue" : "gray"
            }
          />
        </GridItem>
        <GridItem rowSpan={2}>
          <Button
            disabled={
              state.search.ingredients <
              state.experiment.ingredientsPerExperiment
            }
            onClick={() => dispatch({ type: "planExperiment" })}
          >
            Schedule
          </Button>
        </GridItem>
        <GridItem className="GridItem">
          <Text>
            Cost: {state.experiment.ingredientsPerExperiment} Ingredients
          </Text>
        </GridItem>
        <GridItem className="GridItem">
          <Text>
            Scheduled: {state.experiment.plannedExperiments} Experiments
          </Text>
        </GridItem>
      </Grid>
      <Stat>
        <StatLabel>Knowledge</StatLabel>
        <StatNumber>{props.state.experiment.knowledge}</StatNumber>
      </Stat>
    </VStack>
  );
};

export default Experiment;
