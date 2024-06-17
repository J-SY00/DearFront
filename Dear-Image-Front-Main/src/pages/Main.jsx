// import React from 'react'
import { Link } from "react-router-dom";
import Button from "./component/Button";

function Main() {
  return (
    <div className="main">
      <div className="chat-header">
        <Link to="/Chat">
          <Button text="try it now" />
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
}

export default Main;
