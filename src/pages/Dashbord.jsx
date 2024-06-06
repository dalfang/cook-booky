import React from 'react';
import RecipeList from '../components/RecipeList';
import { Link } from 'react-router-dom';

const Dashboard = ({ recipes, handleDelete }) => {
  return (
    <div className='dashbord'>
      <h3 className='recipe-header'>Hey! Find your recipe here! 😋🥬🍅🍕🍳🌮</h3>

      <RecipeList recipes={recipes} handleDelete={handleDelete} />
      
    </div>
  );
}

export default Dashboard;
