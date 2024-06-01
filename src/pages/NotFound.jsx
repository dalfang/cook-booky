import React from 'react'
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const nav = useNavigate();
    nav("/");
  return (
    <div>404 - Not Found
        <h2>The page you are looking for does not exist!</h2>
    </div>
  )
}

export default NotFound;