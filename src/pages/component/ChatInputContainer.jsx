import React, { useState, useEffect } from "react";
import Button from "./Button";

export default function InputContainer({
  resetOn,
  imageSelected,
  sendMessage,
}) {
  const [inputValue, setInputValue] = useState("");

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

  //리셋버튼 관련 : 입력창 초기화
  useEffect(() => {
    if (resetOn) {
      setInputValue("");
    }
  }, [resetOn]);

  return (
    <div className="main-bottom">
      <p>Keyword for image edit : ColorPop, Blur, Replace, Remove</p>
      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={handleInputChange}
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
