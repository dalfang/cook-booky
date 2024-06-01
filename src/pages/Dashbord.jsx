import React from 'react';
import RecipeList from '../components/RecipeList';
import { Link } from 'react-router-dom';

const Dashboard = ({ recipes, handleDelete }) => {
  return (
    <div className='dashbord'>
      <Link to="/create-recipe">
        <button>Create New Recipe</button>
      </Link>
      <RecipeList recipes={recipes} handleDelete={handleDelete} />
      
    </div>
  );
}

export default Dashboard;
