import React from 'react'
import recipeBookData from './assets/recipe-book.json';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const {id} = useParams();
    const recipe = recipeBookData.find(item => item.id === id);
  return (
    <div>
        
        <h1>Recipe's deatils</h1>
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name}/>
        <p>Calories: {recipe.calories}</p>
        <p>Serving: {recipe.servings}</p>
        
    </div>
  )
}

export default ItemDetails