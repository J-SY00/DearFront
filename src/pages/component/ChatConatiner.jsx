import React, { useState, useRef, useEffect } from "react";
import Imageupload from "./ChatImageupload";
import InputContainer from "./ChatInputContainer";
import Message from "./ChatMessage";
import { downloadImage, getImageFromServer } from "./api/pageAPI";

export default function ChatContainer({ resetOn, setResetOn, sessionId }) {
  const [imageSelected, setImageSelected] = useState(false);
  const messageContainerRef = useRef(null);
  const [messages, setMessages] = useState([]);

  const sendSelectedImage = (imageUrl) => {
    setMessages([
      ...messages,
      { isBot: false, newMessage: "", isImage: true, imageUrl },
    ]);
  };

  const sendMessage = async (newMessage) => {
    // Add "Loading..." message
    setMessages([
      ...messages,
      { isBot: false, newMessage },
      {
        isBot: true,
        newMessage: "Loading...",
        isImage: false,
      },
    ]);

    // Fetch image URL from the server
    const serverResponse = await getImageFromServer(newMessage, sessionId);

    if (serverResponse.type == "text") {
      setMessages((prevMessages) =>
        prevMessages.map((message, index) =>
          index === prevMessages.length - 1
            ? {
                isBot: true,
                newMessage: serverResponse.message,
                isImage: false,
              }
            : message
        )
      );
    } else {
      // Replace "Loading..." message with image URL or error message
      setMessages((prevMessages) =>
        prevMessages.map((message, index) =>
          index === prevMessages.length - 1
            ? {
                isBot: true,
                newMessage: "",
                isImage: true,
                imageUrl: serverResponse.url,
              }
            : message
        )
      );
    }
  };

  // Scroll to the bottom of the message container whenever messages change
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle reset button
  useEffect(() => {
    if (resetOn) {
      setImageSelected(false);
      setMessages([]);
      setResetOn(false);
    }
  }, [resetOn]);

  return (
    <div className="chat-main">
      {/* Image upload screen */}
      {!imageSelected && (
        <Imageupload
          setImageSelected={setImageSelected}
          sessionId={sessionId}
          sendSelectedImage={sendSelectedImage} // Pass the function to Imageupload
        />
      )}

      {/* Chat screen after image upload */}
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
              showDownloadButton={!(message.isImage && index === 0)}
            />
          ))}
        </div>
      )}

      {/* User input section */}
      <InputContainer
        imageSelected={imageSelected}
        sendMessage={sendMessage}
        resetOn={resetOn}
        sessionId={sessionId}
      />
    </div>
  );
}
