/* Header.jsx */
import React from "react";
import { useNavigate } from "react-router-dom";
import Chat from "../Chat";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <strong>Header</strong>
      <ul>
        <li>
          <button onClick={() => navigate("../Chat")}>Start Now</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
