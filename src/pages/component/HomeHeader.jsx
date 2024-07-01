/* Header.jsx */
import React from "react";
import Button from "./Button";
import { toChatPage } from "./api/navigation";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  const handleStartNowClick = () => {
    toChatPage(navigate);
  };

  return (
    <header className="home-header">
      <h1>DEAR IMAGE</h1>
      <p>|Edit image with just a single sentence|</p>
      <div className="home-button">
        <Button text="Start Now" onClick={handleStartNowClick}/>
      </div>      
    </header>
  );
};

export default Header;
