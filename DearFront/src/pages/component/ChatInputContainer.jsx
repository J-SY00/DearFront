import React, { useState, useEffect } from "react";
import Button from "./Button";
import { postCommand } from "./api/pageAPI";

export default function InputContainer({ resetOn, imageSelected, sendMessage, sessionId }) {
  const [inputValue, setInputValue] = useState("");
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageSelected && inputValue.trim() !== "") {
      sendMessage(inputValue);
      setInputValue("");
    }
  };
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendText = () => {
    postCommand(inputValue, sessionId);
  };

  //리셋버튼 관련 : 입력창 초기화
  useEffect(() => {
    if (resetOn) {
      setInputValue("");
    }
  }, [resetOn]);

  return (
    <div className="main-bottom">
      <p>Avaliable keyword : Select, ColorPop, Blur, Replace, ?</p>
      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button onClick={handleSendText}
          text="Send" 
          type="submit"
          disabled={!imageSelected || inputValue.trim() === ""}
        />
      </form>
    </div>
  );
}