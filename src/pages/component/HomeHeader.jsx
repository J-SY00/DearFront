/* Header.jsx */
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="home-header">
      <Button text="Start Now" onClick={() => navigate("../Chat")}/>
    </header>
  );
}

export default Header;
