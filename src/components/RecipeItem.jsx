import React from 'react'

const RecipeItem = ({recipe, onDelete}) => {
    const { id, name, calories, image, servings } = recipe;
    const isHighCalorie = item.calories > 500;
  return (
    <div>
        <li>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Calories: {calories}</p>
            {isHighCalorie ? <p>High Calorie</p> : <p>Low Calorie</p>}
            <button onClick={onDelete}>Delete</button>
        </li>
    </div>
  )
}

export default RecipeItem;