import {
  VStack,
  HStack,
  Spinner,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import React, { Dispatch } from "react";
import { Action } from "../../ts/reducer";
import { State } from "../../ts/state";
import { BorderBox } from "../common/BorderBox";
import { Button } from "../common/Button";
import { BORDER_COLOR } from "./colors";

const Search = (props: { state: State; dispatch: Dispatch<Action> }) => {
  const { state, dispatch } = props;
  const speed = state.search.neededProgress / 10;

  return (
    <BorderBox
      borderColor={BORDER_COLOR}
      color={BORDER_COLOR}
    >
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
    </BorderBox>
  );
};

export default Search;
