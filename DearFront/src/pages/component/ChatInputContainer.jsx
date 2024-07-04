import React, { useState, useEffect } from "react";
import axios from 'axios';
import Button from "./Button";
import { postCommand } from "./api/pageAPI";

export default function InputContainer({ resetOn, imageSelected, sendMessage, sessionId }) {
  //input 빈 문자열 선언, setInput함수로 input 값 업데이트
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
    // axios.post(
    //   "http://localhost:3001/command", {
    //   command_contents: inputValue ,
    //   // command_id: command_id
    // }, {
    //   headers: {
    //     'Session-Id': sessionId 
    //     },
    //   }
    // ).then(response => {
    //     console.log("명령어 전송 : ", response.data);
    //     setResponseMessage(response.data.message);
    //     setInputValue('');
    //   })
    //   .catch(error => {
    //     console.error('Error sending text:', error);
    //     setResponseMessage('Error sending text');
    //   });    
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