import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import UploadImage from './assets/img_upload.svg';



export default function Imageupload({ setImageSelected }) {
  const [image, setImage] = useState(null);
  

  const handleImageSubmit = (e) => {
    const fileList = e.target.files[0];
    console.log(fileList);
    if (fileList !== null) {
      const reader = new FileReader();
      //파일 업로드 완료
      reader.onloadend = () => {
        setImage(reader.result);
      };
      // 이미지 선택 됐다고 설정(Messages창에서 이미지 선택하면 채팅창으로 넘어가도록)
      reader.readAsDataURL(fileList);
      setImageSelected(true);
      console.log("선택된 이미지 파일명", fileList.name);


      const formData = new FormData();
      formData.append('image', fileList);

      // FormData의 key 확인
      for (let key of formData.keys()) {
        console.log(key);
      }
    
      // FormData의 value 확인
      for (let value of formData.values()) {
        console.log(value);
      }

      axios({
      
        //FormData에 담기는건 확인했는데 내가 플라스크서버 주소를 잘못만들었는지 post요청은 가는데 업로드 확인이 안됨... 미안해요...
        url: 'http://192.168.45.69:5000/react_to_flask',
        method: 'POST',
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });

    }

  };


  


return (
  <div className="image-upload">
    

    {/* File input */}
    <input 
      id="upload-button" 
      type="file" 
      style={{ display: 'none' }} 
      onChange={handleImageSubmit} 
    />

    <label htmlFor="upload-button">
      <img className='uploadImage' src={UploadImage} alt="Upload" />
    </label>
   
  </div>
);
}
