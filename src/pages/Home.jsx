// Home.jsx
import React from "react";
import Sidebar from "./component/HomeSidebar";
import Header from "./component/HomeHeader";
import HomeTutorial from "./component/HomeTutorial";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home-container">
        <div className="home-sidebar">
          <Sidebar />
        </div>
        <div className="home-hometutorial">
          <HomeTutorial />
        </div>
      </div>
    </div>
  );
}

export default Home;
