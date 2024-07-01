import React, { useState } from 'react';
import axios from 'axios';
import UploadImage from './assets/img_upload.svg';

export default function Imageupload({ setImageSelected }) {
  const [image, setImage] = useState(null);

  const handleImageSubmit = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImageSelected(true);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', image);
      console.log("선택된 이미지 파일명", formData.name);

      // Axios를 사용하여 파일 업로드
      await axios.post('http://127.0.0.1:5000', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('파일 업로드 성공');
    } catch (error) {
      console.error('파일 업로드 실패:', error);
    }
    console.log("선택된 이미지 파일명", formData.name);
  };

    
  



  return (
    <div className="image-upload">
      <label onClick={handleUpload} htmlFor="upload-button">
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