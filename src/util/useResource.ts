import { useCallback, useState } from "react";
import { useCounter } from "./useCounter";

export const useResource = () => {
	const [amount, amountSet] = useState(0);
	const produce = useCallback((producedAmount: number) => {
		if (producedAmount < 0) {
			throw Error("Can't produce a negative amount!");
		}
		amountSet((amount) => amount + producedAmount);
	}, []);
	const consume = useCallback((consumedAmount: number) => {
		if (consumedAmount < 0) {
			throw Error("Can't consume a negative amount!");
		}
		if (amount < consumedAmount) return false;
		amountSet((amount) => amount - consumedAmount);
		return true;
	}, []);
	return { amount, produce, consume };
};

export type UseResource = ReturnType<typeof useResource>;

export const useTrackedResource = () => {
	const { amount, produce, consume } = useResource();
	const [totalProduced, totalProducedIncrement] = useCounter();
	const [totalConsumed, totalConsumedtIncrement] = useCounter();
	const trackedProduce = useCallback(
		(producedAmount: number) => {
			produce(producedAmount);
			totalProducedIncrement(producedAmount);
		},
		[produce, totalProducedIncrement]
	);
	const trackedConsume = useCallback(
		(consumedAmount: number) => {
			if (consume(consumedAmount)) {
				totalConsumedtIncrement(consumedAmount);
				return true;
			}
			return false;
		},
		[consume, totalConsumedtIncrement]
	);
	return {
		amount,
		produce: trackedProduce,
		consume: trackedConsume,
		totalProduced,
		totalConsumed,
	};
};

export type UseTrackedResource = ReturnType<typeof useTrackedResource>;
