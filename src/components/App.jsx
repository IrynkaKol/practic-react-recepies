import { RecipeList } from './RecipeList/RecipeList'
import recipes from '../recepies.json'

export const App = () => {
  return (
    <div 
    styled={{display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,}}>
      <RecipeList recipes={recipes} />
    </div>
  );
};
