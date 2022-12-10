import { useState } from "react";
import { createContext } from "react";

interface GatherContextState {
	neededProgress: number;
	setNeededProgress: (newNeededProgress: number) => void;
	foundMin: number;
	setFoundMin: (newFoundMin: number) => void;
	foundMax: number;
	setFoundMax: (newFoundMax: number) => void;
}

const initialGatherContext: GatherContextState = {
	neededProgress: 30,
	setNeededProgress: () => {},
	foundMin: 0,
	setFoundMin: () => {},
	foundMax: 4,
	setFoundMax: () => {},
};

export const GatherContext = createContext(initialGatherContext);

interface Props {
	children: React.ReactNode;
}

export const GatherContextProvider: React.FC<Props> = ({ children }) => {
	const [neededProgress, setNeededProgress] = useState(
		initialGatherContext.neededProgress
	);
	const [foundMin, setFoundMin] = useState(initialGatherContext.foundMin);
	const [foundMax, setFoundMax] = useState(initialGatherContext.foundMax);
	return (
		<GatherContext.Provider
			value={{
				neededProgress,
				setNeededProgress,
				foundMin,
				setFoundMin,
				foundMax,
				setFoundMax,
			}}
		>
			{children}
		</GatherContext.Provider>
	);
};
