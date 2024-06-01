import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = ({ recipes }) => {
    const { id } = useParams();
    const recipeId = parseInt(id);
    const recipe = recipes.find(recipe => recipe.id === recipeId);

    console.log("detail")
    
    if (!recipe) {
      return <p>Recipe not found</p>;
    }
    
    return (
      <div>
          <h1>Recipe's details</h1>
          <h2>{recipe.name}</h2>
          <img src={recipe.image} alt={recipe.name}/>
          <p>Calories: {recipe.calories}</p>
          <p>Serving: {recipe.servings}</p>
          {recipe.calories > 300 ? <p>High Calorie</p> : <p>Low Calorie</p>}
      </div>
    );
}

export default ItemDetails;
