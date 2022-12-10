import {
  Button,
  HStack,
  Spinner,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import React from "react";
import { BorderBox } from "../components/common/BorderBox";
import { BORDER_COLOR } from "./colors";

interface Props {
  isGathering: boolean;
  startGathering: () => void;
  ingredients: number;
  speed: number;
}

export const Gather: React.FC<Props> = ({
  isGathering,
  startGathering,
  ingredients,
  speed,
}) => (
  <BorderBox borderColor={BORDER_COLOR} color={BORDER_COLOR}>
    <HStack alignItems="flex-start">
      <Button disabled={isGathering} onClick={startGathering}>
        Search
      </Button>
      {isGathering && (
        <Spinner size="lg" colorScheme="green" speed={`${speed}s`} />
      )}
    </HStack>
    <Stat>
      <StatLabel>Ingredients</StatLabel>
      <StatNumber>{ingredients}</StatNumber>
    </Stat>
  </BorderBox>
);
