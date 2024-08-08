import React from "react";
import Button from "./Button";

export default function Message({
  message,
  isBot,
  isImage,
  imageUrl,
  onDownload,
  showDownloadButton,
}) {
  return (
    <div className={`message-container ${isBot ? "bot" : "user"}`}>
      <div>
        {message}
        {isImage && imageUrl && (
          <div className="message-img-container">
            {isImage ? <img src={imageUrl} alt="Uploaded" /> : <p>{message}</p>}
            {isBot && showDownloadButton && isImage && (
              <Button text="Download" onClick={onDownload} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
