import React from 'react';
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className="not-found-container">
            <h1>404 - Page Not Found 🚨🚨🚨 </h1>
            <h2>The page you are looking for does not exist!</h2>
            <button onClick={goToHome} className="home-button">Go to Home</button>
        </div>
    );
}

export default NotFound;
