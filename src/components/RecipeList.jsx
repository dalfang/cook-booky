import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, handleDelete }) => {
  return (
    //show photo and name of 
    <ul className="recipe-list">
    
      {recipes.map(recipe => (
        <RecipeItem key={recipe.id} recipe={recipe} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default RecipeList;
