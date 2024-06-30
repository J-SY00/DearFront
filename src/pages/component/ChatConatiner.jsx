import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Imageupload from "./ChatImageupload";
import InputContainer from "./ChatInputContainer";
import Message from "./ChatMessage";

export default function ChatConatiner({ resetOn, setResetOn }) {
  const [imageSelected, setImageSelected] = useState(false);
  const [messages, setMessages] = useState([]);
  const messageContainerRef = useRef(null);

  const sendMessage = async (newMessage) => {
    //답변 가져오는...
    //I am a bot이라고 답장
    const response = "I am a bot";

    let imageUrl = null;
    try {
      const imageResponse = await axios.get(
        "https://back-end-url/command_image"
      );
      imageUrl = imageResponse.data.imageUrl; // Adjust based on your response structure
    } catch (error) {
      console.error("Error fetching image:", error);
    }

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

    /*
    setMessages([
      ...messages,
      {isBot : false, newMessage},
      
      // 이미지 결과를 보내지 않는 경우
      // {isBot : true, newMessage: response, isImage: false}

      // 이미지 결과를 보내는 경우
      {isBot : true, newMessage: response, isImage: true}
    ])
      */
  };

  //이미지 다운로드 버튼
  const downloadImage = () => {
    alert("Image download");
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
      {!imageSelected && <Imageupload setImageSelected={setImageSelected} />}

      {/* 이미지 업로드 후 대화창 화면 */}
      {imageSelected && (
        <div className="chat-container" ref={messageContainerRef}>
          {messages.map((message, index) => (
            <Message
              key={index}
              message={message.newMessage}
              isBot={message.isBot}
              isImage={message.isImage}
              onDownload={downloadImage}
            />
          ))}
        </div>
      )}

      {/* 사용자 입력 부분 */}
      <InputContainer
        imageSelected={imageSelected}
        sendMessage={sendMessage}
        resetOn={resetOn}
      />
    </div>
  );
}
