import { useCallback, useContext } from "react";
import { GatherContext } from "../main/GatherContext";
import { useCounter } from "../util/useCounter";
import { useProgress } from "../util/useProgress";
import { useTrackedResource } from "../util/useResource";

export type GatherSource = "alchemist" | "rats";

const useAlchemistGatherTick = (onFindIngredients: (producedIngredients: number) => void) => {
	const { neededProgress, foundMin, foundMax, } = useContext(GatherContext);
	const findIngredients = useCallback(() => {
		const foundIngredients = Math.floor((foundMax - foundMin) * Math.random());
		onFindIngredients(foundIngredients);
	}, [foundMin, foundMax, onFindIngredients]);
	const { tick } = useProgress(neededProgress, findIngredients);
	return tick;
};

export const useGather = (
	isGathering: boolean,
) => {
	const { amount, produce, consume, totalProduced } = useTrackedResource();
	const [alchemistIngredients, alchemistIngredientsIncrement] = useCounter();
	const [ratIngredients, ratIngredientsIncrement] = useCounter();
	const onFindIngredients = useCallback(
		(foundIngredients: number, source: GatherSource) => {
			produce(foundIngredients);
			if (source === "alchemist") {
				alchemistIngredientsIncrement(foundIngredients);
			} else if (source === "rats") {
				ratIngredientsIncrement(foundIngredients);
			}
		},
		[alchemistIngredientsIncrement, produce, ratIngredientsIncrement]
	);
	const alchemistTick = useAlchemistGatherTick(
		(foundIngredients) => onFindIngredients(foundIngredients, "alchemist")
	);
	const tick = useCallback(() => {
		if (isGathering) {
			alchemistTick();
		}
	}, [alchemistTick, isGathering]);
	return {
		ingredients: amount,
		tick,
		total: {
			ingredients: totalProduced,
			alchemistIngredients,
			ratIngredients,
		},
		consumeIngredients: consume,
	};
};

export type UseGather = ReturnType<typeof useGather>;
