import React from 'react'

export default function Message({message, isBot}) {
  return (
    <div className={`message-container ${isBot?"bot":"user"}`}>
      {message}
    </div>
  )
}
