// Home.jsx
import React from "react";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header.jsx";
import HomeTutorial from "./component/HomeTutorial.jsx";

function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      <Header />
      <div className="container">
        <Sidebar />
        <HomeTutorial />
      </div>
    </div>
  );
}

export default Home;
