// import React from 'react'
import { Link } from "react-router-dom";
import Button from "./component/Button";

function Main() {
  return (
    <div className="main">
      {/* 화면 어디든지 누르면 설명페이지로 */}
      <Link to="/home">
        <>
          {/* 바로시작하기 버튼 누르면 채팅페이지로 */}
          <Link to="/Chat">
            <Button text="try it now" />
          </Link>
          <div class="user-wrap">
            <div class="user-image">
              <img src="img/IMG_4263.png" alt="" />
            </div>
            <div class="user-text">
              <p>DEAR IMAGE</p>
            </div>
          </div>
        </>
      </Link>
    </div>
  );
}

export default Main;
