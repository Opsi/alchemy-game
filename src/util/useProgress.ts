import { useCallback } from "react";
import { useResource } from "./useResource";

export const useProgress = (
	neededProgress: number,
	onCompleted: () => void
) => {
	if (neededProgress <= 0) {
		throw Error("neededProgress has to be > 0!");
	}
	const { amount, produce, consume } = useResource();
	const tick = useCallback(() => {
		produce(1);
		console.log(`We have Progress ${amount}/${neededProgress}`);
		while (consume(neededProgress)) {
			console.log("We are completed!");
			onCompleted();
		}
	}, [produce, consume, amount, neededProgress, onCompleted]);
	return { progress: amount, tick };
};

export type UseProgress = ReturnType<typeof useProgress>;
