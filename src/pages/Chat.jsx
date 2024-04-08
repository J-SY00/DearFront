import React, {useState} from 'react'
import Imageupload from './component/Imageupload';
import Input from './component/Input'
import Messages from './component/Messages'
import Header from './component/Header'

export default function Chat() {
  return (
    <div className='App'>
      <Header/>
      <Messages/>
      <Input/>
    </div>
  )

  // //이미지 업로드 관련
  // const [imageSelected, setImageSelected] = useState(false);
  // //사용자 입력 관련
  // const [input, setInput] = useState("");

  // //Send 버튼 눌렀을 때
  // const handleSend = async() => {
  //   if (!imageSelected) {
  //     alert("이미지를 선택하세요");
  //     return;
  //   }
  //   console.log(input)
  //   setInput('')
  // }
  // //엔터 눌렀을 때
  // const handelKeyPress = (e) => {
  //   if(e.key === 'Enter'){
  //     if (!imageSelected) {
  //       alert("이미지를 선택하세요");
  //       return;
  //     }
  //     console.log(input)
  //     setInput('')
  //   }
  // }

  // return (
  //   <div className='App'>
  //     <div className='container'>
  //       <div className='header'>
  //         <button>Reset</button>
  //       </div>
  //       <div className='main'>
  //       {/* 이미지 선택 안됐을 때 */}
  //       {!imageSelected && (
  //         <Imageupload setImageSelected={setImageSelected} />
  //       )}
  //       {/* 이미지 선택 O */}
  //       {imageSelected && (
  //         <div className='chats'>
  //           <div className='chat user'>
  //             I'm user
  //           </div>

  //           <div className='chat bot'>
  //             I'm a bot
  //           </div>
  //         </div>
  //       )}
  //       </div>
  //       <div className="chatFooter">
  //         <p>Avaliable keyword : ColorPop, Blur, Replace</p>
  //           <div className='inp'>
  //             <input type='text' placeholder='Send a message...' 
  //             value={input} onChange={(e)=>{setInput(e.target.value)}} onKeyDown={handelKeyPress}/>
  //             <button className='send' onClick={handleSend}>보내기</button>
  //           </div>
  //       </div>
  //   </div>
  // </div>
  // )
}
