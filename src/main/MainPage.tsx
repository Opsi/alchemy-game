import { Box, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { Button } from "../components/common/Button";
import { Experiment } from "../experiment/Experiment";
import { useExperiment } from "../experiment/useExperiment";
import { Gather } from "../gather/Gather";
import { useGather } from "../gather/useGather";
import { AlchemistActivity } from "./types";

const useTicks = (pause: boolean, ...ticks: (() => void)[]) => {
  const tick = useCallback(() => {
    console.log('Tick!');
    ticks.forEach((tick) => tick())
  }, [ticks]);
  const savedTick = useRef(tick);

  useEffect(() => {
    savedTick.current = tick;
  });

  useEffect(() => {
    if (pause) return;
    const interval = setInterval(savedTick.current, 100);
    return () => clearInterval(interval);
  }, [pause]);
}

const MainPage: React.FC = () => {
  const [pause, pauseSet] = useState(false);
  const [alchemistActivity, alchemistActivitySet] = useState<AlchemistActivity>(
    "none",
  );
  const gather = useGather(
    alchemistActivity === "gather",
    // 10, // TODO
    // 0, // TODO
    // 4, // TODO
  );
  const { ingredients, tick: gatherTick, consumeIngredients } = gather;
  const experiment = useExperiment(
    alchemistActivity === "experiment",
    100, // TODO
    2, // TODO
    () => consumeIngredients(5), // TODO
  );
  const {
    knowledge,
    tick: experimentTick,
    progress,
    planExperiment,
    plannedExperiments,
  } = experiment;

  useTicks(
    pause,
    gatherTick,
    experimentTick,
  )

  return (
    <HStack spacing={5} p="10">
      <Button
        label={pause ? 'Paused!' : 'Running'}
        onClick={() => pauseSet(!pause)}
      />
      <Box minW="300px">
        <Gather
          isGathering={alchemistActivity === "gather"}
          ingredients={ingredients}
          speed={10}
          startGathering={() => alchemistActivitySet("gather")}
        />
      </Box>
      <Box minW="300px">
        <Experiment
          isExperimenting={alchemistActivity === "experiment"}
          canPlanExperiment={ingredients > knowledge}
          ingredientsPerExperiment={5}
          knowledge={knowledge}
          neededProgress={100}
          progress={progress}
          planExperiment={planExperiment}
          plannedExperiments={plannedExperiments}
          startExperimenting={() => alchemistActivitySet("experiment")}
        />
      </Box>
      {
        /* <BoO */
      }
    </HStack>
  );
};

export default MainPage;
