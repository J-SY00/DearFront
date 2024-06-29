import axios from 'axios';

//다운로드버튼
export const getImageURL = () => {
  return axios.get(
    // 'https://picsum.photos/800/800'
    'https://imageURL', {
    responseType: 'blob',
  });
};