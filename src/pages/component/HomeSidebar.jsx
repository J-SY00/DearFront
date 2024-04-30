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
        <li onClick={() => scrollToSection("tutorial-colorpop")}>Colorpop</li>
        <li onClick={() => scrollToSection("tutorial-replace")}>Replace</li>
        <li onClick={() => scrollToSection("tutorial-emoji")}>Emoji</li>
        <li onClick={() => scrollToSection("tutorial-blur")}>Blur</li>
        <li onClick={() => scrollToSection("tutorial-?")}>GQA</li>
      </ul>
    </div>
  );
};

export default Sidebar;
