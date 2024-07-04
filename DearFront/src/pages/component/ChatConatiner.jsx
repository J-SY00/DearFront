import React, { useState, useRef, useEffect } from 'react';
import Imageupload from "./ChatImageupload"
import InputContainer from './ChatInputContainer';
import Message from './ChatMessage';
import { downloadImage, getImageFromServer } from './api/pageAPI';
import axios from 'axios';

export default function ChatConatiner({ resetOn, setResetOn, sessionId }) {
  const [imageSelected, setImageSelected] = useState(false);
  const messageContainerRef = useRef(null);
  const [messages, setMessages] = useState([]);

  const sendMessage = async (newMessage) => {
    //답변 가져오는...
    const response = "";

    // let imageUrl = null;
    // try {
    //   const imageResponse = await axios.post(
    //     // "http://localhost:5000/api/image",
    //     "http://localhost:3001/api/image",
    //     { message: newMessage }
    //   ); // Adjust the URL and payload as needed
    //   imageUrl = imageResponse.data.imageUrl; // Adjust based on your response structure
    //   console.log("Fetched image URL:", imageUrl);
    // } catch (error) {
    //   console.error("Error fetching image:", error);
    // }

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
      setImageSelected(false); //Reset버튼 누르면 이미지선택 초기화 상태로 변경
      setMessages([]); //Reset버튼 누르면 메시지창 초기화로 변경
      setResetOn(false); //true로 변한 resetOn 변수 다시 false로 초기화완료 상태로
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
