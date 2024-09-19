/* Header.jsx */
import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();  

  return (
    <header className="home-header">
      <h1>DEAR IMAGE</h1>
      <div className="home-button">
        <Button text="Start Now" onClick={() => navigate('/Chat')}/>
      </div>      
    </header>
  );
};

export default Header;
