import React, { useState } from 'react';
import axios from "axios";
import UploadImage from './assets/img_upload.svg';

export default function Imageupload({ setImageSelected }) {
  const [imageUrl, setImageUrl] = useState(false);

  
  const setFile = (e) => {
    if (e.target.files[0]) {
      const img = new FormData();
      img.append("file", e.target.files[0]);
      axios
        .post("http://localhost:8080/upload", img)
        .then((res) => {
          setImageUrl(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    // 이미지 선택 됐다고 설정(Messages창에서 이미지 선택하면 채팅창으로 넘어가도록)
    setImageSelected(true);
  };

    
  

  return (
    <div className="image">
      <label htmlFor="upload-button">
        <img className='uploadImage' src={UploadImage} alt="Upload"/>
      </label>

      {/* 파일 선택 창 */}
      <input id="upload-button" type="file" style={{ display: 'none' }} onChange={setFile}/>
    </div>
  );
}