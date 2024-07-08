import React, { useEffect, useState } from "react";
import HeaderContainer from "./component/ChatHeaderContainer";
import ChatConatiner from "./component/ChatConatiner";
import { startPage } from './component/api/pageAPI';

function Chat() {
  const [sessionId, setSessionId] = useState(null);
  const [resetOn, setResetOn] = useState(false);

  useEffect(() => {
    startPage();
  }, []);

  
  //리셋버튼 : 초기화상태 변경 함수 : true = 버튼 누른 것
  const handleChatReset = async() => {
    setResetOn(true);
  };

  return (
    <div className="chat">
      <HeaderContainer onResetChatSelected={handleChatReset} /> 
      <ChatConatiner resetOn={resetOn} setResetOn={setResetOn} sessionId={sessionId} setSessionId={setSessionId}/>
    </div>
  );
}

export default Chat;
