import create from "zustand";

interface State {
	ingredients: number;
	rareIngredients: number;
	addIngredients: (amount: number) => void;
	addRareIngredients: (amount: number) => void;
}

export const useStore = create<State>((set) => ({
	ingredients: 0,
	rareIngredients: 0,
	addIngredients: (amount: number) =>
		set((state) => ({ ingredients: state.ingredients + amount })),
	addRareIngredients: (amount: number) =>
		set((state) => ({ rareIngredients: state.rareIngredients + amount })),
}));
