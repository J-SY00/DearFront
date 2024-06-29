import axios from 'axios';

//다운로드버튼
export const getImageURL = () => {  
  //예시(서버 답변 이미지 URL)
  return axios.get('https://picsum.photos/800/800', {
    responseType: 'blob',
  });
};