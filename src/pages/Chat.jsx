import React, { useState } from "react";
import HeaderContainer from "./component/ChatHeaderContainer";
import ChatConatiner from "./component/ChatConatiner";

function Chat() {
  const [resetOn, setResetOn] = useState(false);

  //초기화상태 변경 함수 : true = 버튼 누른 것
  const handleChatReset = () => {
    setResetOn(true);
  };

  return (
    <div className="chat">
      <HeaderContainer onResetChatSelected={handleChatReset} /> 
      <ChatConatiner resetOn={resetOn} setResetOn={setResetOn}/>
    </div>
  );
}

export default Chat;
