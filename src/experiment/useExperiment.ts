import { useCallback } from "react";
import { useProgress } from "../util/useProgress";
import { useTrackedResource } from "../util/useResource";

export interface UseExperiment {
	knowledge: number;
	progress: number;
	planExperiment: () => boolean;
	plannedExperiments: number;
	tick: () => void;
}

const useAlchemistExperimentTick = (
	isExperimenting: boolean,
	neededProgress: number,
	produceKnowledge: (amount: number) => void,
	knowledgePerExperiment: number,
	plannedExperiments: number,
	consumePlannedExperiments: (amount: number) => boolean
) => {
	const finishExperiment = useCallback(() => {
		if (consumePlannedExperiments(1)) {
			produceKnowledge(knowledgePerExperiment);
		}
	}, [consumePlannedExperiments, produceKnowledge, knowledgePerExperiment]);
	const { progress, tick } = useProgress(neededProgress, finishExperiment);
	const alchemistExperimentTick = useCallback(() => {
		if (isExperimenting && plannedExperiments > 0) {
			tick();
		}
	}, [isExperimenting, plannedExperiments, tick]);
	return {
		tick: alchemistExperimentTick,
		progress,
	};
};

export const useExperiment = (
	isExperimenting: boolean,
	neededProgress: number,
	knowledgePerExperiment: number,
	consumeIngredientsForExperiment: () => boolean
): UseExperiment => {
	const {
		amount: knowledge,
		produce: produceKnowledge,
		consume: consumeKnowledge,
	} = useTrackedResource();
	const {
		amount: plannedExperiments,
		produce: producePlannedExperiments,
		consume: consumePlannedExperiments,
	} = useTrackedResource();
	const { tick, progress } = useAlchemistExperimentTick(
		isExperimenting,
		neededProgress,
		produceKnowledge,
		knowledgePerExperiment,
		plannedExperiments,
		consumePlannedExperiments
	);
	const planExperiment = useCallback(() => {
		if (consumeIngredientsForExperiment()) {
			producePlannedExperiments(1);
			return true;
		}
		return false;
	}, []);
	return {
		knowledge,
		progress,
		plannedExperiments,
		tick,
		planExperiment,
	};
};
