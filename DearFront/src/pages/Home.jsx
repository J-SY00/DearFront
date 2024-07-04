// Home.jsx
import React, { useEffect } from 'react';
import Sidebar from "./component/HomeSidebar";
import Header from "./component/HomeHeader";
import HomeTutorial from "./component/HomeTutorial";
import { mainPage } from './component/api/pageAPI';


function Home() {

  useEffect(() => {
    mainPage();
  }, []);

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
