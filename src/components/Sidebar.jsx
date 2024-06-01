import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebar-list">
                <li><Link to="/recipes">Recipes</Link></li>
                <li><Link to="/create-recipe">Add Recipe</Link></li>
                <li><Link to="/about">About us</Link></li>
            </ul>        
        </div>
    );
}
 
export default Sidebar;