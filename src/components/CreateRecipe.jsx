import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const CreateRecipe = ({ recipes, setRecipes }) => {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('');
  const [servings, setServings] = useState(0);

  function handleAddRecipes(event) {
    event.preventDefault();

    const newRecipe = {
      id: recipes.length + 1, 
      name,
      calories: parseInt(calories), 
      image,
      servings: parseInt(servings) 
    };

    setRecipes([...recipes, newRecipe]);
    nav("/");
  }
  return (
    <div className='create-recipe-form'>
      <h3>Create your recipe! 🌟</h3>
      <form onSubmit={handleAddRecipes}>
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
        <button type="submit">Add your recipe!</button>
      </form>
    </div>
  );
}

export default CreateRecipe;
