import React from 'react';
import { Link, useParams } from 'react-router-dom';
import RecipeItem from '../components/RecipeItem';

const ItemDetails = ({ recipes }) => {
    const recipeParams = useParams(); 
    const foundRecipe = recipes.find((oneRecipe) => (oneRecipe.id == recipeParams.id));

    console.log("detail")
    
    if (!foundRecipe) {
      return <p>Recipe not found</p>;
      
    }
    return (

      <div className="main-content">
       <div className='recipe-detail'>
         
           <h1>Recipe's details</h1>
           <h2>{foundRecipe.name}</h2>
           <img src={foundRecipe.image} alt={foundRecipe.name} style={{height: "100px"}}/>
           <p>Calories: {foundRecipe.calories}</p>
           <p>Serving: {foundRecipe.servings}</p>
           {foundRecipe.calories > 300 ? <p>High Calorie</p> : <p>Low Calorie</p>}
 
           <Link to={`/update-recipe/${foundRecipe.id}`}>
           <button>Edit</button>
           </Link>
           </div>
          
      </div>
    );
}
export default ItemDetails;
