import React, { useState } from 'react';
import UploadImage from './assets/img_upload.svg';
import { uploadImage } from './api/pageAPI';

export default function Imageupload({ setImageSelected, setSessionId }) {

  const handleImageSubmit = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }  
    // 이미지 업로드 시 세션 설정
    const sessionData = await uploadImage(file);
    setSessionId(sessionData.sessionId);
    setImageSelected(true);
  };

  return (
    <div className="image-upload">
      <label htmlFor="upload-button">
        <img className='uploadImage' src={UploadImage} alt="Upload" />
      </label>

      {/* File input */}
      <input 
        id="upload-button" 
        type="file" 
        style={{ display: 'none' }} 
        onChange={handleImageSubmit} 
      />
    </div>
  );
}