/* Header.jsx */
import React from "react";
import { useNavigate } from "react-router-dom";
import Chat from "../Chat";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="home-header">
      <button onClick={() => navigate("../Chat")}>Start Now</button>
    </header>
  );
}

export default Header;
