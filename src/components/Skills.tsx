import { Box, Button, Heading, Progress, Stat, StatLabel, StatNumber, VStack } from "@chakra-ui/react";
import React, { Dispatch } from "react";
import { Action } from "../ts/reducer";
import { State } from "../ts/state";

const Skills = (props: { state: State; dispatch: Dispatch<Action> }) => {
  const learnableSkills = [];

  return (
    <VStack borderWidth="1px" p="4" bg="LightYellow" align="stretch">
      <Heading as="h3" size="lg">Skills</Heading>
    </VStack>
  );
};

export default Skills;
