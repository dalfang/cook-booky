import React from 'react'
import { Link } from 'react-router-dom';


const RecipeItem = ({recipe, handleDelete}) => {
    const { id, name, calories, image, servings } = recipe;
    const isHighCalorie = calories > 300;

  return (
    <body>
    <div className='recipe-card'>
    <div className='recipe-container-card'>
       <Link to={`/details/${id}`} className='recipe-link'>
         <img src={image} alt={name} className='recipe-image' />
         <h3>{name}</h3>
         <p>Calories: {calories} <br /> Servings: {servings} </p>
         {isHighCalorie ? <p>High Calorie</p> : <p>Low Calorie</p>}
       </Link>  
    </div> 
    <button onClick={() => handleDelete(id)}>Delete</button>  
  </div>
  </body> 
  );
};
export default RecipeItem;