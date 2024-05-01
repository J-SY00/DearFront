import React from "react";
import HeaderContainer from "./component/ChatHeaderContainer";
import ChatConatiner from "./component/ChatConatiner";

function Chat() {
  return (
    <div className="chat">
      <HeaderContainer/>
      <ChatConatiner />
    </div>
  );
}

export default Chat;
