import { Button, Progress, VStack, Text } from "@chakra-ui/react";
import { Dispatch } from "react";
import { Action, State } from "./MainPage";

const Experiment = (props: { state: State; dispatch: Dispatch<Action> }) => {
  return (
    <VStack spacing={2} align="stretch">
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
      <Text fontSize="3xl">knowledge: {props.state.experiment.knowledge}</Text>
    </VStack>
  );
};

export default Experiment;
