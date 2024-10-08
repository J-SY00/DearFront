/* Main.jsx */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './component/Button';
import { useNavigate } from "react-router-dom";
import { mainPage } from './component/api/pageAPI';

const Main = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    mainPage();
  }, []);

  return (
    <div className="main">
      <div className="chat-header">
        <Link to="/chat">
        <Button text="Start Now" onClick={() => navigate('/Chat')}/>
        </Link>
      </div>
      <div className="user-wrap">
        <Link to="/home">
          <div className="main-logo">
            <img src="img/IMG_4263.png" alt="" />
            <h1>DEAR IMAGE</h1>
            <p>The easiest image edit tool</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
