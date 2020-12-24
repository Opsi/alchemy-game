import { Box, Button, Progress, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import React, { Dispatch } from "react";
import { Action, State } from "./MainPage";

const Experiment = (props: { state: State; dispatch: Dispatch<Action> }) => {
  return (
    <Box borderWidth="1px" p="4" bg="LightSkyBlue">
      <Button
        disabled={
          props.state.runningActivity === "experiment" ||
          props.state.experiment.blocked
        }
        onClick={() =>
          props.dispatch({ type: "changeActivity", activity: "experiment" })
        }
      >
        Experiment
      </Button>
      <Progress
        max={props.state.experiment.neededProgress}
        value={props.state.experiment.progress}
        colorScheme={
          props.state.runningActivity === "experiment" ? "green" : "gray"
        }
      />
      <Stat>
        <StatLabel>Knowledge</StatLabel>
        <StatNumber>{props.state.experiment.knowledge}</StatNumber>
      </Stat>
    </Box>
  );
};

export default Experiment;
