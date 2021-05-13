import {
  VStack,
  HStack,
  Spinner,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import React, { Dispatch } from "react";
import { Action } from "../ts/reducer";
import { State } from "../ts/state";
import { Button } from "./common/Button";

const Search = (props: { state: State; dispatch: Dispatch<Action> }) => {
  const { state, dispatch } = props;
  const speed = state.search.neededProgress / 10;

  return (
    <VStack borderWidth="1px" p="4" bg="LightGreen">
      <HStack alignItems="flex-start">
        <Button
          disabled={state.runningActivity === "search"}
          onClick={() =>
            dispatch({ type: "changeActivity", activity: "search" })
          }
        >
          Search
        </Button>
        {state.runningActivity === "search" && (
          <Spinner size="lg" colorScheme="green" speed={`${speed}s`} />
        )}
      </HStack>
      <Stat>
        <StatLabel>Ingredients</StatLabel>
        <StatNumber>{state.search.ingredients}</StatNumber>
      </Stat>
    </VStack>
  );
};

export default Search;
