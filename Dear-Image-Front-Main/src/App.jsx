import React from "react";
import Button from "./component/Button";
import Home from "./home";

function App() {
  return (
    <div>
      <Button text={"바로 시작하기"} />
      <div class="user-wrap">
        <img class="user-wrap" alt="" src="img/IMG_4262.png" />
      </div>
      <div class="user-text">
        <p>DEAR IMAGE</p>
      </div>
    </div>
  );
}

export default App;
