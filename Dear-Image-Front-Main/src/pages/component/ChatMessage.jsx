import React from 'react'

export default function Message({message, isBot, isImage, onDownload, unDo}) {
  return (
    <div className={`message-container ${isBot?"bot":"user"}`}>
      <div>
        {message}  
        {isBot && isImage && (
          <div className='bot-image-button'>
            <button className="download" onClick={onDownload}>Download</button>
            <button className="unDo" onClick={unDo}>undo</button>
          </div>
        )}
      </div>
    </div>
  )
}
