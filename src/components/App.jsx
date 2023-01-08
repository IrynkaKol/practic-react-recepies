import { RecipeList } from './RecipeList'
import recipes from '../recepies.json'

export const App = () => {
  return (
    <div>
      <RecipeList recipes={recipes} />
    </div>
  );
};
