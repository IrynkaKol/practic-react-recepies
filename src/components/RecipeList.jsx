import { Recipe } from './Recipe';

export const RecipeList = ({ recipes }) => {
  return (
    <div style={{display: 'flex', gap: 16}}>
      {recipes.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};
