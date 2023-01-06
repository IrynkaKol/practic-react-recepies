import { RecipeList } from './RecipeList'
import recipes from '../recepies.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <RecipeList recipes={recipes} />
    </div>
  );
};
