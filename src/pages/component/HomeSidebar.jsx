// Sidebar.jsx
import React from "react";

const Sidebar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => scrollToSection("tutorial-colorpop")}>
          <span>COLORPOP</span>
          <span className="hide-on-small"> ----------------------●</span>
        </li>
        <li onClick={() => scrollToSection("tutorial-replace")}>
          <span>REPLACE</span>
          <span className="hide-on-small"> -----------------------●</span>
        </li>
        <li onClick={() => scrollToSection("tutorial-emoji")}>
          <span>EMOJI</span>
          <span className="hide-on-small"> -------------------------●</span>
        </li>
        <li onClick={() => scrollToSection("tutorial-blur")}>
          <span>BLUR</span>
          <span className="hide-on-small"> --------------------------●</span>
        </li>
        <li onClick={() => scrollToSection("tutorial-?")}>
          <span>GQA</span>
          <span className="hide-on-small"> ---------------------------●</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
