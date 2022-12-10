import {
  Grid,
  GridItem,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import React, { Dispatch } from "react";
import { BorderBox } from "../components/common/BorderBox";
import { Button } from "../components/common/Button";
import { BORDER_COLOR } from "./colors";

interface Props {
  isExperimenting: boolean;
  startExperimenting: () => void;
  canPlanExperiment: boolean;
  planExperiment: () => void;
  ingredientsPerExperiment: number;
  plannedExperiments: number;
  knowledge: number;
  progress: number;
  neededProgress: number;
}

export const Experiment: React.FC<Props> = ({
  isExperimenting,
  startExperimenting,
  canPlanExperiment,
  planExperiment,
  ingredientsPerExperiment,
  plannedExperiments,
  knowledge,
  progress,
  neededProgress,
}) => {
  const warning = isExperimenting && plannedExperiments === 0;

  return (
    <BorderBox
      borderColor={BORDER_COLOR}
      color={BORDER_COLOR}
    >
      <Grid
        templateRows="repeat(2, 4fr)"
        templateColumns="repeat(2, 1fr)"
        gap={2}
      >
        <GridItem rowSpan={2}>
          <Button
            warning={warning}
            disabled={isExperimenting}
            onClick={startExperimenting}
          >
            Experiment
          </Button>
        </GridItem>
        <GridItem rowSpan={2}>
          <Progress
            max={neededProgress}
            value={progress}
            colorScheme={isExperimenting ? "blue" : "gray"}
          />
        </GridItem>
        <GridItem rowSpan={2}>
          <Button
            disabled={!canPlanExperiment}
            onClick={planExperiment}
          >
            Schedule
          </Button>
        </GridItem>
        <GridItem className="GridItem">
          <Text>
            {`Cost: ${ingredientsPerExperiment} Ingredients`}
          </Text>
        </GridItem>
        <GridItem className="GridItem">
          <Text>
            {`Scheduled: ${plannedExperiments} Experiments`}
          </Text>
        </GridItem>
      </Grid>
      <Stat>
        <StatLabel>Knowledge</StatLabel>
        <StatNumber>{knowledge}</StatNumber>
      </Stat>
    </BorderBox>
  );
};
