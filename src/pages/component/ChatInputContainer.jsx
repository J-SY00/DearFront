import React, { useState, useEffect } from "react";
import axios from 'axios';
import Button from "./Button";

export default function InputContainer({ resetOn, imageSelected, sendMessage }) {
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
    console.log("입력한 텍스트", inputValue);
    axios.post("http://192.168.45.69:5000/react_to_flask", inputValue )
      .then(response => {
        console.log("입력한 텍스트", inputValue);
        setResponseMessage(response.data.message);
        setInputValue('');
      })
      .catch(error => {
        console.error('Error sending text:', error);
        setResponseMessage('Error sending text');
      });
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
          onKeyPress={(e) => e.key === 'Enter' && handleSendText()}
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
