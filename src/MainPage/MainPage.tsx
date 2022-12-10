import { useStore } from '../store/store';

const Ingredients = () => {
  const ingredients = useStore((state) => state.ingredients);
  const addIngredients = useStore((state) => state.addIngredients);
  return (
    <div>
      <button onClick={() => addIngredients(1)}>Add Ingredient</button>
      <div>Ingredients: {ingredients}</div>
    </div>
  );
};

const RareIngredients = () => {
  const rareIngredients = useStore((state) => state.rareIngredients);
  const addRareIngredients = useStore((state) => state.addRareIngredients);
  return (
    <div>
      <button onClick={() => addRareIngredients(1)}>Add Rare Ingredient</button>
      <div>Rare Ingredients: {rareIngredients}</div>
    </div>
  );
};

export const MainPage: React.FC = () => {
  return (
    <div className="text-2xl font-bold underline">
      <Ingredients />
      <RareIngredients />
    </div>
  );
};
