import React, { useState } from 'react';
import axios from 'axios';
import UploadImage from './assets/img_upload.svg';
import { uploadImage } from './api/pageAPI';

export default function Imageupload({ setImageSelected, sessionId }) {

  const handleImageSubmit = async (e) => {
    // const file = e.target.files[0];
    // const formData = new FormData();
    // formData.append('file', file);
    // // console.log("선택된 이미지 파일명", file.name);
    // // console.log("User upload image Session ID:", sessionId);
    // if (file) {
    //   try {
    //     // Axios를 사용하여 파일 업로드
    //     const response = await axios.post(
    //       "http://localhost:3001/command_image",
    //       formData,
    //       {
    //         headers: {
    //           'Content-Type': 'multipart/form-data',
    //           'Session-Id' : sessionId
    //         },
    //       }
    //     );        
    //     console.log("파일업로드 : ", response.data); //연결 확인

    //     //post되면 채팅창으로 넘어감        
    //     setImageSelected(true);                
    //     alert('파일 업로드 성공');        
    //   } catch (error) {
    //     console.error('파일 업로드 실패:', error);
    //   }
    // }
    const file = e.target.files[0];
    if (!file) {
      return;
    }  
    uploadImage(file, sessionId);
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