import React, { useState } from 'react';
import Imageupload from './Imageupload';

export default function Messages() {
  const [imageSelected, setImageSelected] = useState(false);

  return (
    <div className='main'>
      {!imageSelected && (
        <Imageupload setImageSelected={setImageSelected} />
      )}
      {imageSelected && (
        <div className='chats'>
          <div className='chat bot'>
            I'm a bot  
          </div>

          <div className='chat user'>
            I'm a user
          </div>

          <div className='chat bot'>
            I'm a bot
          </div>

          <div className='chat user'>
            I'm a user
          </div>

          <div className='chat bot'>
            I'm a bot
          </div>
        </div>
      )}
    </div>
  );
}