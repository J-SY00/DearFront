import axios from 'axios';

const baseURL = 'http://localhost:3001';

const api = axios.create({
  baseURL,
});

//GET 메인페이지
export const mainPage = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('MainPage error : ', error);
    throw error;
  }
};

//GET 채팅페이지
export const startPage = async () => {
  try {
    const response = await api.get('/start');
    return response.data;
  } catch (error) {
    console.error('startPage Error : ', error);
    throw error;
  }
};




//이미지 url get
export const getImageURL = async (imageUrl) => {
  return await axios.get(
    imageUrl, { 
    responseType: 'blob' 
  });
};

//이미지 다운로드 버튼
export const downloadImage = async (imageUrl) => {
  try {
    const response = await getImageURL(imageUrl);
    const ImageData = new Blob([response.data], { type: 'image/png' });
    const url = window.URL.createObjectURL(ImageData);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'image.png';
    link.click();
    window.URL.revokeObjectURL(url);
    console.log(response);
  } catch (error) {
    console.error("Error downloading image:", error);
  }
};
