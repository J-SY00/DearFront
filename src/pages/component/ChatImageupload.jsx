import React, { useState } from 'react';
import UploadImage from './assets/img_upload.svg';

export default function Imageupload({ setImageSelected }) {
  const [image, setImage] = useState(false);

  const handleImageSubmit = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      //파일 업로드 완료
      reader.onloadend = () => {
        setImage(reader.result);
      };
      // 이미지 선택 됐다고 설정(Messages창에서 이미지 선택하면 채팅창으로 넘어가도록)
      setImageSelected(true);
      // console.log("선택된 이미지 파일명", file.name);

      // 이미지 서버로 전송...
    }
  };

  return (
    <div>
      <label htmlFor="upload-button">
        <img className='uploadImage' src={UploadImage} alt="Upload"/>
      </label>

      {/* 파일 선택 창 */}
      <input id="upload-button" type="file" style={{ display: 'none' }} onChange={handleImageSubmit}/>
    </div>
  );
}