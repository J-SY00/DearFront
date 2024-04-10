// Home.jsx
import React from "react";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header.jsx";
import HomeTutorial from "./component/HomeTutorial.jsx";

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      <Header />
      <Sidebar />
    </div>
  );
};

export default Home;
