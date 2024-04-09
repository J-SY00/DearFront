import React, { useState, useRef, useEffect } from 'react';
import Imageupload from './Imageupload';
import UserInput from './Input';

export default function Messages() {
  const [imageSelected, setImageSelected] = useState(false);

  const [messages, setMessages] = useState([]);
  const messageContainerRef = useRef(null);

  const sendMessage = (newMessage) => {
    setMessages([...messages, {sender: "user", newMessage}]);
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
      {!imageSelected && (
        <Imageupload setImageSelected={setImageSelected} />
      )}
      {imageSelected && (
        <div className='chat-container'>
          {messages.map((message, index) => (
            <div key={index} ref={messageContainerRef} className={`message-container ${message.sender}`}>
              {message.newMessage}
            </div>
          ))}
        </div>
      )}      
      <UserInput imageSelected={imageSelected} sendMessage={sendMessage}/>
    </div>
  );
}