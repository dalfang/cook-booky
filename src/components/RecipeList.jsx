import React from 'react'
import RecipeItem from './RecipeItem'

const RecipeList = ({recipes, onDelete}) => {
  return (
    <div> 
      {recipes.map(recipe => (
        <RecipeItem key ={recipe.id} recipe={recipe} onClick={() => onDelete(recipe.id)} />
      ))}
    </div>
  )
}

export default RecipeList