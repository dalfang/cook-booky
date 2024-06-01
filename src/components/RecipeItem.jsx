import React from 'react'
import { Link } from 'react-router-dom';


const RecipeItem = ({recipe, handleDelete}) => {
    const { id, name, calories, image, servings } = recipe;
    const isHighCalorie = calories > 300;
  return (
    
    <div className='recipe-image-container'>
      <h4>{name}</h4>
      <img src={image} alt={name} className='recipe-image'/>
      <p>Calories: {calories} <br /> Servings: {servings} </p>
      {isHighCalorie ? <p>High Calorie</p> : <p>Low Calorie</p>}
      <Link to={`/details/${id}`}>View Details</Link>
      <button onClick={() => handleDelete(id)}>Delete</button>        
    </div>
  );
};

export default RecipeItem;