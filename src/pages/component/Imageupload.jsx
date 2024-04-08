import React, { useState } from 'react';
import Upload from './assets/upload.svg';

export default function Imageupload({ setImageSelected }) {
  const [image, setImage] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      //파일 업로드 완료
      reader.onloadend = () => {
        setImage(reader.result);
      };
      //이미지 선택 여부 > Messages창에서 이미지 선택하면 채팅창으로 넘어가도록
      setImageSelected(true);

      //콘솔 창
      console.log("선택된 이미지 파일명", file.name);

      //화면에 파일 보이게...
      // reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label htmlFor="upload-button"><img src={Upload} alt="Upload" width='400px' height='400px'/></label>
      <input id="upload-button" type="file" style={{ display: 'none' }} onChange={handleImageChange}/>
      {image && (<div><img src={image} alt="Uploaded" /></div>)}
    </div>
  );
}