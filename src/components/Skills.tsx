import { Heading, VStack } from "@chakra-ui/react";
import React, { Dispatch } from "react";
import { Action } from "../ts/reducer";
import { State } from "../ts/state";
import { Button } from "./common/Button";

const Skills = (props: { state: State; dispatch: Dispatch<Action> }) => {
  const { state, dispatch } = props;
  return (
    <VStack borderWidth="1px" p="4" bg="LightYellow" align="stretch">
      <Heading as="h3" size="lg">
        Skills
      </Heading>
      <VStack>
        {state.skill.known.map((skill) => (
          <Button
            id={skill.title}
            disabled={!skill.affordable(state)}
            onClick={() => dispatch({ type: "completeSkill", skill })}
          >
            {skill.title}
          </Button>
        ))}
      </VStack>
    </VStack>
  );
};

export default Skills;
