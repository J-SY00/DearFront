import React, { useState, useRef, useEffect } from 'react';
import Imageupload from "./ChatImageupload"
import InputContainer from './ChatInputContainer';
import Message from './ChatMessage';

export default function ChatConatiner() {
  const [imageSelected, setImageSelected] = useState(false);
  const [messages, setMessages] = useState([]);
  const messageContainerRef = useRef(null);

  const sendMessage = async (newMessage) => {

    //답변 가져오는...
    //I am a bot이라고 답장
    const response = "I am a bot"

    setMessages([
      ...messages,
      {isBot : false, newMessage},
      
      // 이미지 결과를 보내지 않는 경우
      // {isBot : true, newMessage: response, isImage: false}

      // 이미지 결과를 보내는 경우
      {isBot : true, newMessage: response, isImage: true}
    ])
  };

  //이미지 다운로드 버튼
  const downloadImage = () => {
    alert("Image download");
  };

  //이미지 마음 안들 때 취소 버튼
  const unDo = () => {
    alert("Go Back");
  };

  // Scroll to the bottom of the message container whenever messages change
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
      messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className='chat-main'>
      {/* 이미지 업로드 화면 */}
      {!imageSelected && (
        <Imageupload setImageSelected={setImageSelected} />
      )}

      {/* 이미지 업로드 후 대화창 화면 */}
      {imageSelected && (
        <div className='chat-container' ref={messageContainerRef}>
          {messages.map((message, index) => (
            <Message key={index} message={message.newMessage} isBot={message.isBot} isImage={message.isImage} 
            onDownload={downloadImage} unDo={unDo}/>
          ))}
        </div>
      )}      

      {/* 사용자 입력 부분 */}
      <InputContainer imageSelected={imageSelected} sendMessage={sendMessage}/>
    </div>
  );
}