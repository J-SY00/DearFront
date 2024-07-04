import React, { useEffect, useState } from "react";
import HeaderContainer from "./component/ChatHeaderContainer";
import ChatConatiner from "./component/ChatConatiner";
import { startPage, resetSession } from './component/api/pageAPI';

function Chat() {
  const [sessionId, setSessionId] = useState(null);
  const [resetOn, setResetOn] = useState(false);
  
  const getSessionId = async () => {
    const response = await startPage();
    const sessionId = response.session_id;
    setSessionId(sessionId);
    setResetOn(true);
  };

  useEffect(() => {
    getSessionId();
  }, []);

  
  //리셋버튼 : 초기화상태 변경 함수 : true = 버튼 누른 것
  const handleChatReset = async() => {
    const response = await resetSession();
    const newSessionId = response.session_id;
    setSessionId(newSessionId);
    setResetOn(true);
  };

  return (
    <div className="chat">
      <HeaderContainer onResetChatSelected={handleChatReset} /> 
      <ChatConatiner resetOn={resetOn} setResetOn={setResetOn} sessionId={sessionId}/>
    </div>
  );
}

export default Chat;
