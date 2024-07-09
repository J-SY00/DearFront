import React, { useState, useRef, useEffect } from 'react';
import Imageupload from "./ChatImageupload"
import InputContainer from './ChatInputContainer';
import Message from './ChatMessage';
import { downloadImage, getImageFromServer } from './api/pageAPI';

export default function ChatConatiner({ resetOn, setResetOn, sessionId, setSessionId }) {
  const [imageSelected, setImageSelected] = useState(false);
  const messageContainerRef = useRef(null);
  const [messages, setMessages] = useState([]);

  const sendMessage = async (newMessage) => {
    //답변 가져오는...
    const response = "";

    const imageUrl = await getImageFromServer(newMessage)

    setMessages([
      ...messages,
      { isBot: false, newMessage },
      {
        isBot: true,
        newMessage: response,
        isImage: Boolean(imageUrl),
        imageUrl,
      },
    ]);
  };

  // Scroll to the bottom of the message container whenever messages change
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  //리셋버튼 관련
  useEffect(() => {
    if (resetOn) {
      setImageSelected(false);
      setMessages([]);
      setResetOn(false);
    }
  }, [resetOn]);

  return (
    <div className="chat-main">
      {/* 이미지 업로드 화면 */}
      {!imageSelected && <Imageupload setImageSelected={setImageSelected} sessionId={sessionId} setSessionId={setSessionId}/>}

      {/* 이미지 업로드 후 대화창 화면 */}
      {imageSelected && (
        <div className="chat-container" ref={messageContainerRef}>
          {messages.map((message, index) => (
            <Message 
              key={index} 
              message={message.newMessage} 
              isBot={message.isBot} 
              isImage={message.isImage} 
              imageUrl={message.imageUrl}
              onDownload={() => downloadImage(message.imageUrl)}
            />
          ))}
        </div>
      )}

      {/* 사용자 입력 부분 */}
      <InputContainer 
        imageSelected={imageSelected} 
        sendMessage={sendMessage} 
        resetOn={resetOn}
        sessionId={sessionId}
      />
    </div>
  );
}
