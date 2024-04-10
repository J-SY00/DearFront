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
        <li>
          <button onClick={() => scrollToSection("tutorial-colorpop")}>
            Colorpop
          </button>
        </li>

        <li>
          <button onClick={() => scrollToSection("tutorial-replace")}>
            Replace
          </button>
        </li>

        <li>
          <button onClick={() => scrollToSection("tutorial-emoji")}>
            Emoji
          </button>
        </li>

        <li>
          <button onClick={() => scrollToSection("tutorial-blur")}>Blur</button>
        </li>

        <li>
          <button onClick={() => scrollToSection("tutorial-?")}>GQA</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
