import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './component/Button';
import { useNavigate } from "react-router-dom";
import { toMainPage } from './component/api/navigation';

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toMainPage(navigate);
  }, []);

  return (
    <div className="main">
      <div className="chat-header">
        <Link to="/chat">
          <Button text="Try it now" />
        </Link>
      </div>
      <div className="user-wrap">
        <Link to="/home">
          <div className="main-logo">
            <img src="img/IMG_4263.png" alt="" />
            <p>DEAR IMAGE</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
