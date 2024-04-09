import React, {useState} from "react";

export default function Input({imageSelected, sendMessage }){

  //input 빈 문자열 선언, setInput함수로 input 값 업데이트
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageSelected && inputValue.trim() !== '') {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  //엔터 눌렀을 때
  const handelKeyPress = (e) => {
    if(e.key === 'Enter') {
      const event = e; 
      if (event.preventDefault) event.preventDefault();
      handleSubmit(e);
    }
  }

  return (
    <div className="main-bottom">
      <p>Avaliable keyword : ColorPop, Blur, Replace</p>
      <form onSubmit={handleSubmit} className="input-container">
        <input 
          type='text' 
          placeholder='Type your message...'
          value={inputValue} 
          onChange={(e)=>{setInputValue(e.target.value)}} 
          onKeyDown={handelKeyPress}/>
        <button className='send' type='submit' disabled={!imageSelected || inputValue.trim() === ''}>Send</button>
      </form>  
    </div>
  )
};