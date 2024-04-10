// Home.jsx
import React from "react";
import Sidebar from "./component/HomeSidebar"
import Header from "./component/HomeHeader"
import HomeTutorial from "./component/HomeTutorial"

export default function Home() {

  return (
    <div className="home">
      <Header />
      <div className="home-container">
        <Sidebar />
        <HomeTutorial />
      </div>
    </div>
  );
}
