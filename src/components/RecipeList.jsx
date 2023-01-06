import { Recipe } from './Recipe';

export const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};
