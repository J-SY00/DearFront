/* Header.jsx */
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="home-header">
      <h1>DEAR IMAGE</h1>

      <button onClick={() => navigate("../Chat")}>Start Now</button>
    </header>
  );
};

export default Header;
