import React, { useState, useEffect } from "react";
import Button from "./Button";

export default function InputContainer({ resetOn, imageSelected, sendMessage }) {
  //input 빈 문자열 선언, setInput함수로 input 값 업데이트
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();



    axios
      .post("http://localhost:8080/upload", { 
      
      }).then((res) => { //데이터 전송 성공 시 response 받음
        alert("명령어 전송 성공");
      })
      .catch(function (err) { //데이터 전송 실패 시 error 받음
        console.error("Error:", error);
      });
    

    

    if (imageSelected && inputValue.trim() !== "") {
      sendMessage(inputValue);
      setInputValue("");
    }
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
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <Button
          text="Send" 
          type="submit"
          disabled={!imageSelected || inputValue.trim() === ""}
        />
      </form>
    </div>
  );
}
