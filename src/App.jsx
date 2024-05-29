import React, { useState }  from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import recipeBookData from './assets/recipe-book.json'
import './App.css'


function App() {
 
const [recipeData, setRecipeData] = useState(recipeBookData);
  return (
    <>
     <Navbar />
     <Sidebar />
    
    </>
  )
}

export default App
