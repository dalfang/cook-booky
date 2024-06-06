import './App.css'
import { Route, Routes } from 'react-router-dom';
import React, { useState }  from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import recipeBookData from './assets/recipe-book.json'
import Dashbord from './pages/Dashbord';
import ItemDetails from './pages/ItemDetails';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import CreateRecipe from './components/CreateRecipe';
import UpdateRecipe from './components/UpdateRecipe';


function App() {
  const [recipeData, setRecipeData] = useState(recipeBookData);

  function handleDelete(id) {
    setRecipeData(recipeData.filter(recipe => recipe.id !== id));
  }

  return (
    <>
     <Navbar />
     <Sidebar />
      <div>
      <Routes>
          <Route path="/" element={<Dashbord recipes={recipeData} handleDelete={handleDelete} />} />
          <Route path="/details/:id" element={<ItemDetails recipes={recipeData} />} />
          <Route path="/create-recipe" element={<CreateRecipe recipes={recipeData} setRecipes={setRecipeData} />} />
          <Route path="/update-recipe/:id" element={<UpdateRecipe recipes={recipeData} setRecipes={setRecipeData}/>}/>
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />      
      </Routes>
      </div>
     <Footer/>
    </>
  )
}

export default App;
