// import React from 'react'
import { Link } from "react-router-dom";
import Button from "./component/Button";

export default function Main() {
  return (
    <div>
      <Link to="/chat">
        <Button text={"바로 시작하기"} />
      </Link>
      <div class="user-wrap">
        <img class="user-wrap" alt="" src="img/IMG_4262.png" />
      </div>
      <div class="user-text">
        <p>DEAR IMAGE</p>
      </div>
    </div>
  );
}
