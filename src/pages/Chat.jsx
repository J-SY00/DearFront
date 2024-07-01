import React, { useEffect, useState } from "react";
import HeaderContainer from "./component/ChatHeaderContainer";
import ChatConatiner from "./component/ChatConatiner";
import { startPage } from './component/api/pageAPI';

function Chat() {
  const [resetOn, setResetOn] = useState(false);
  
  // useEffect(() => {
  //   startPage();
  // }, []);

  //리셋버튼 : 초기화상태 변경 함수 : true = 버튼 누른 것
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
