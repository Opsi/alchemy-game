import {
    Box,
    Button,
    Progress,
    Stat,
    StatLabel,
    StatNumber
} from "@chakra-ui/react";
import React, { Dispatch } from "react";
import { Action } from "../ts/reducer";
import { State } from "../ts/state";

const Search = (props: { state: State; dispatch: Dispatch<Action> }) => {
  return (
    <Box borderWidth="1px" p="4" bg="LightGreen">
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
      <Stat>
        <StatLabel>Ingredients</StatLabel>
        <StatNumber>{props.state.search.ingredients}</StatNumber>
      </Stat>
    </Box>
  );
};

export default Search;
