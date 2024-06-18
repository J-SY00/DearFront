import React from 'react'
import Button from "./Button";

export default function Message({message, isBot, isImage, onDownload }) {
  return (
    <div className={`message-container ${isBot?"bot":"user"}`}>
      <div>
        {message}  
        {isBot && isImage && (
          <div className='bot-image-button'>
            <Button text="download" onClick={onDownload}/>
          </div>
        )}
      </div>
    </div>
  )
}