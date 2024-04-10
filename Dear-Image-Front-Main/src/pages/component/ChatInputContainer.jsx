import React, { useState } from "react";

export default function InputContainer({ imageSelected, sendMessage }) {
  //input 빈 문자열 선언, setInput함수로 input 값 업데이트
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageSelected && inputValue.trim() !== "") {
      sendMessage(inputValue);
      setInputValue("");
    }
  };

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
        <button
          className="send"
          type="submit"
          disabled={!imageSelected || inputValue.trim() === ""}
        >
          Send
        </button>
      </form>
    </div>
  );
}
