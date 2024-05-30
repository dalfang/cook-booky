
import React, { useState }  from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import recipeBookData from './assets/recipe-book.json'
import './App.css'
import RecipeList from './components/RecipeList';


function App() {
 
  const [recipeData, setRecipeData] = useState(recipeBookData);

  const handleDelete = (id) => {
    setRecipeData(recipeData.filter(recipe => recipe.id !== id));
  };

  return (
    <>
     <Navbar />
     <Sidebar />
     <div className="content">
        
        <RecipeList recipes={recipeData} onDelete={handleDelete} />
      
      </div>
     <Footer/>

    
    </>
  )
}

export default App
