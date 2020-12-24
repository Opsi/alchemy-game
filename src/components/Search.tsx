import {
  Button,
  Progress,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import { Dispatch } from "react";
import { Action, State } from "./MainPage";

const Search = (props: { state: State; dispatch: Dispatch<Action> }) => {
  return (
    <VStack spacing={2} align="stretch">
      <Button
        disabled={props.state.runningActivity === "search"}
        onClick={() =>
          props.dispatch({ type: "changeActivity", activity: "search" })
        }
      >
        Search
      </Button>
      <Progress
        max={props.state.search.neededProgress}
        value={props.state.search.progress}
        colorScheme={
          props.state.runningActivity === "search" ? "green" : "gray"
        }
      />
      <Text fontSize="3xl">Ingredients: {props.state.search.ingredients}</Text>
    </VStack>
  );
};

export default Search;
