import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const UpdateRecipe = ({recipes, setRecipes}) => {

  const updateRecipeParams = useParams(); 
  const foundRecipe = recipes.find((oneRecipe) => { 
    if (oneRecipe.id == updateRecipeParams.id){
      return true;
    }
  });
  console.log(foundRecipe);


  const [name, setName] = useState(foundRecipe.name);
  const [calories, setCalories] = useState(foundRecipe.calories);
  const [image, setImage] = useState(foundRecipe.image);
  const [servings, setServings] = useState(foundRecipe.servings);
  const nav = useNavigate();

  function handleUpdateRecipe(event) {
    event.preventDefault();
    const updateRecipe = {name, calories, image, servings, id:foundRecipe.id};
    const updateArrayOfRecipes = recipes.map((oneRecipe) => {
      if (oneRecipe.id == updateRecipeParams.id) {
        return updateRecipe;
      } else {
        return oneRecipe;
      }
    })

    console.log(updateArrayOfRecipes);
    setRecipes(updateArrayOfRecipes);
    nav(`/details/${updateRecipeParams.id}`);
  }

  return (
    <div className='update-recipe-form' >
      <h1>Update the recipe</h1>
    <form onSubmit={handleUpdateRecipe}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your recipe name"
          />
        </label>
        <label>
          How many calories:
          <input
            type="text"
            value={calories}
            onChange={(event) => setCalories(event.target.value)}
            placeholder="Calories"
          />
        </label>
        <label>
          Serving:
          <input
            type="number"
            value={servings}
            onChange={(event) => {
              const newServings = parseInt(event.target.value, 10);
              setServings(isNaN(newServings) || newServings < 0 ? 0 : newServings);
            }}
            placeholder="Servings"
          />
        </label>
        <label>
          Recipe's Image:
          <input
            name="image"
            type="url"
            placeholder="Recipe Image URL"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </label>
        <button>Update!</button>
      </form>
    </div>
  )
}
export default UpdateRecipe
