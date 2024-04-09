import React, { useState, useRef, useEffect } from 'react';
import Imageupload from './Imageupload';
import UserInput from './Input';

export default function Messages() {
  const [imageSelected, setImageSelected] = useState(false);
  const [messages, setMessages] = useState([]);
  const messageContainerRef = useRef(null);

  const sendMessage = async (newMessage) => {
    setMessages([...messages, {isBot: false, newMessage}]);
    //답변 가져오는...
    //I am a bot이라고 답장
    const response = "I am a bot!"

    setMessages([
      ...messages,
      {isBot : false, newMessage},
      {isBot : true, newMessage: response}
    ])
  };

  // Scroll to the bottom of the message container whenever messages change
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
      messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className='main'>
      {/* 이미지 업로드 화면 */}
      {!imageSelected && (
        <Imageupload setImageSelected={setImageSelected} />
      )}

      {/* 이미지 업로드 후 대화창 화면 */}
      {imageSelected && (
        <div className='chat-container' ref={messageContainerRef}>
          {messages.map((message, index) => (
            <div key={index}  className={`message-container ${message.isBot?"bot":"user"}`}>
              {message.newMessage}
            </div>
          ))}
        </div>
      )}      

      {/* 사용자 입력 부분 */}
      <UserInput imageSelected={imageSelected} sendMessage={sendMessage}/>
    </div>
  );
}