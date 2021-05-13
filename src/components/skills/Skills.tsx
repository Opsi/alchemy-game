import { Heading, VStack } from "@chakra-ui/react";
import React, { Dispatch } from "react";
import { Action } from "../../ts/reducer";
import { State } from "../../ts/state";
import { BorderBox } from "../common/BorderBox";
import { Button } from "../common/Button";
import { BORDER_COLOR } from "./colors";

const Skills = (props: { state: State; dispatch: Dispatch<Action> }) => {
  const { state, dispatch } = props;
  return (
    <BorderBox
      borderColor={BORDER_COLOR}
      color={BORDER_COLOR}
    >
      <Heading as="h3" size="lg">
        Skills
      </Heading>
      <VStack>
        {state.skill.known.map((skill) => (
          <Button
            key={skill.title}
            disabled={!skill.affordable(state)}
            onClick={() => dispatch({ type: "completeSkill", skill })}
          >
            {skill.title}
          </Button>
        ))}
      </VStack>
    </BorderBox>
  );
};

export default Skills;
