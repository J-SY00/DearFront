// import React from 'react'
import { Link } from "react-router-dom";
import Button from "./component/Button";

export default function Main() {

  return (
    <div>
      {/* 화면 어디든지 누르면 설명페이지로 */}
      <Link to="/home">
      <>
        {/* 바로시작하기 버튼 누르면 채팅페이지로 */}
        <Link to="/Chat">
            <Button text="try it now"/>
        </Link>
        <div>
          <img class="user-wrap" alt="" src="img/IMG_4262.png"/>
        </div>
      </>
      </Link>
    </div>
  );
}