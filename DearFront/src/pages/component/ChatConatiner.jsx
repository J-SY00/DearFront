import React, { useState, useRef, useEffect } from 'react';
import Imageupload from "./ChatImageupload"
import InputContainer from './ChatInputContainer';
import Message from './ChatMessage';
import { downloadImage, getImageFromServer } from './api/pageAPI';

export default function ChatConatiner({ resetOn, setResetOn, sessionId}) {
  const [imageSelected, setImageSelected] = useState(false);
  const messageContainerRef = useRef(null);
  const [messages, setMessages] = useState([]);

  // const sendMessage = async (newMessage) => {
  //   // 답변 가져오는...
  //   const response = "";

  //   const imageUrl = await getImageFromServer(newMessage, sessionId);

  //   setMessages([
  //     ...messages,
  //     { isBot: false, newMessage },
  //     {
  //       isBot: true,
  //       newMessage: response,
  //       isImage: Boolean(imageUrl),
  //       imageUrl,
  //     },
  //   ]);
  // };

  const sendMessage = async (newMessage) => {

    // 메시지에 'Loading...' 추가
    setMessages([
      ...messages,
      { isBot: false, newMessage },
      {
        isBot: true,
        newMessage: "Loading...",
        isImage: false,
      },
    ]);

    // 이미지 URL 가져오기
    const imageUrl = await getImageFromServer(newMessage, sessionId);

    // 'Loading...' 메시지를 이미지 URL 또는 오류 메시지로 대체
    setMessages((prevMessages) =>
      prevMessages.map((message, index) =>
        index === prevMessages.length - 1
          ? {
              isBot: true,
              newMessage: imageUrl ? "" : "이미지를 가져오지 못했습니다.",
              isImage: Boolean(imageUrl),
              imageUrl,
            }
          : message
      )
    );
  };

  // Scroll to the bottom of the message container whenever messages change
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // 리셋 버튼 관련
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
      {!imageSelected && <Imageupload setImageSelected={setImageSelected} sessionId={sessionId}/>}

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
