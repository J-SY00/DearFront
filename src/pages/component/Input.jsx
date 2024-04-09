import React, {useState} from "react";

export default function Input({imageSelected}){

  //input 빈 문자열 선언, setInput함수로 input 값 업데이트
  const [input, setInput] = useState("");

  //Send 버튼 눌렀을 때
  const handleSend = async() => {
    console.log(input);
    setInput('');
  }

  //엔터 눌렀을 때
  const handelKeyPress = (e) => {
    if(e.key === 'Enter'){
      if(!imageSelected){
        alert('이미지를 선택하세요');
        setInput(''); 
        return;
      }
      console.log(input)
      setInput('')
    }
  }

  return (
    <div className="chatFooter">
      <p>Avaliable keyword : ColorPop, Blur, Replace</p>
        <div className='inp'>
          <input type='text' placeholder='Send a message...' 
          value={input} onChange={(e)=>{setInput(e.target.value)}} onKeyDown={handelKeyPress}/>
          <button className='send' onClick={handleSend} disabled={!imageSelected || input.trim() === ''}>보내기</button>
        </div>
    </div>
  )
};