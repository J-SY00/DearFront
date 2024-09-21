// Chat.jsx
import React, { useEffect, useState } from "react";
import HeaderContainer from "./component/ChatHeaderContainer";
import ChatConatiner from "./component/ChatConatiner";
import { imgUpload } from "./component/api/pageAPI";

function Chat() {
  const [sessionId, setSessionId] = useState(null);
  const [resetOn, setResetOn] = useState(false);

  const fetchSessionId = async () => {
    try {
      const data = await imgUpload();
      setSessionId(data.session_id);
    } catch (error) {
      console.error("Error fetching session ID:", error);
    }
  };

  useEffect(() => {
    fetchSessionId();
  }, []);

  const handleChatReset = async () => {
    setResetOn(true);
    fetchSessionId();
  };

  return (
    <div className="chat">
      <HeaderContainer onResetChatSelected={handleChatReset} />
      <ChatConatiner
        resetOn={resetOn}
        setResetOn={setResetOn}
        sessionId={sessionId}
        setSessionId={setSessionId}
      />
    </div>
  );
}

export default Chat;
