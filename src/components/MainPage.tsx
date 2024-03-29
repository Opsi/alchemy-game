import { Box, HStack } from "@chakra-ui/react";
import React, {
  useEffect,
  useReducer
} from "react";
import { reducer } from "../ts/reducer";
import { initialState } from "../ts/state";
import Experiment from "./Experiment";
import Search from "./Search";
import Skills from "./Skills";

const MainPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "tick" });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <HStack spacing={5} p="10">
      <Box minW="300px">
        <Search state={state} dispatch={dispatch} />
      </Box>
      <Box minW="300px">
        <Experiment state={state} dispatch={dispatch} />
      </Box>
      <Box minW="300px">
        <Skills state={state} dispatch={dispatch} />
      </Box>
    </HStack>
  );
};

export default MainPage;
