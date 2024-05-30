import React from 'react'

const RecipeItem = ({recipe, onDelete}) => {
    const { id, name, calories, image, servings } = recipe;
    const isHighCalorie = id.calories > 500;
  return (
    <div className='recipe-image-container'>
        
            <img src={image} alt={name} className='recipe-image'/>
            <h3>{name}</h3>
            <p>Calories: {calories}</p>
            {isHighCalorie ? <p>High Calorie</p> : <p>Low Calorie</p>}
            <button onClick={onDelete}>Delete</button>
        
    </div>
  )
}

export default RecipeItem;