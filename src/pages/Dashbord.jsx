import React, { useState } from 'react'
import RecipeList from '../components/RecipeList'
import recipeBookData from './assets/recipe-book.json'

const Dashbord = () => {
    const [recipes, setRecipes] = useState(recipeBookData);

  return (
    <div>
        <RecipeList/>
    </div>

  )
}

export default Dashbord