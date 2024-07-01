import React from "react";
import Button from "./Button";

export default function Message({
  message,
  isBot,
  isImage,
  imageUrl,
  onDownload,
}) {
  return (
    <div className={`message-container ${isBot ? "bot" : "user"}`}>
      <div>
        {message}
        {isImage && imageUrl && (
          <div className="message-img-container">
            <img src={imageUrl} alt="Fetched from the server" />
            <Button text="download" onClick={onDownload} />
          </div>
        )}
      </div>
    </div>
  );
}
