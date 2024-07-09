import React, { useState } from 'react';
import UploadImage from './assets/img_upload.svg';
import { uploadImage } from './api/pageAPI';
import Button from './Button';

export default function Imageupload({ setImageSelected, setSessionId }) {
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      return;
    }

    // 미리보기
    const previewUrl = URL.createObjectURL(selectedFile);
    setImagePreview(previewUrl);
    setFile(selectedFile);
    // console.log('Selected file:', selectedFile);
  };

  const handleImageSubmit = async () => {
    if (!file) {
      console.log('No file selected');
      return;
    }

    try {
      // 이미지 업로드 시 세션 설정
      // console.log('Uploading file:', file);
      const ImageUpload = await uploadImage(file);
      // console.log('Upload response:', ImageUpload);
      setSessionId(ImageUpload.sessionId);
      setImageSelected(true);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="image-upload">
      <div className="image-container">
        <label htmlFor="upload-button">
          {imagePreview ? (
            <img className='uploadImage' src={imagePreview} alt="Preview" />
          ) : (
            <img className='uploadImage' src={UploadImage} alt="Upload" />
          )}
        </label>

        <input 
          id="upload-button" 
          type="file" 
          style={{ display: 'none' }} 
          onChange={handleImageChange} 
        />

        {imagePreview && (
          <div className="button-container">
            <Button text="Use this Image" onClick={handleImageSubmit} />
          </div>
        )}
      </div>
    </div>
  );
}
