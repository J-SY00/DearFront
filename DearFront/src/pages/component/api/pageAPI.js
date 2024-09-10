import axios from 'axios';

const baseURL = 'http://localhost:5000';

const api = axios.create({
  baseURL,
});

//GET 메인페이지
export const mainPage = async () => {
  try {
    const response = await api.get('/');
    console.log('서버 응답:', response.data); // 연결 확인
    return response.data;
  } catch (error) {
    console.error('MainPage error : ', error);
    throw error;
  }
};

// 튜토리얼페이지
export const startPage = async () => {
  try {
    const response = await api.get('/start');
    console.log('서버 응답:', response.data); // 연결 확인
    return response.data;
  } catch (error) {
    console.error('startPage Error : ', error);
    throw error;
  }
};

// 채팅페이지(이미지업로드창)
export const imgUpload = async () => {
  try {
    const response = await api.get('/imgupload');
    console.log('서버 응답:', response.data); // 연결 확인
    return response.data;
  } catch (error) {
    console.error('imgUploadPage Error : ', error);
    throw error;
  }
};

// 사용자 이미지 업로드
export const uploadImage = async (file, sessionId) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await api.post(
      '/command_image',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Session-Id': sessionId,
        },
      }
    );
    
    console.log('파일 업로드:', response.data); // 연결 확인
    return response.data;
  } catch (error) {
    console.error('파일 업로드 실패:', error);
    throw error;
  }
};

// 명령어 전송 및 서버의 답장 받아오는
export const getImageFromServer = async (newMessage, sessionId) => {
  let imageUrl = null;

  try {
    // 이미지 생성 요청
    const response = await api.post(
      '/imageEdit', { 
        command_contents: newMessage ,
      },
      {
        headers: {
          'Session-Id': sessionId,
        },
      }
    );
    imageUrl = response.request.responseURL;
    console.log("수정된 이미지 : ", imageUrl);
    return imageUrl;
  } catch (error) {
    console.error("수정 이미지 업로드 오류 :", error);
  }
};

//이미지 url get
export const getImageURL = async (imageUrl) => {
  console.log("Getting Image URL to download:", imageUrl);
  if (!imageUrl.startsWith('http')) {
    imageUrl = api.defaults.baseURL + imageUrl;
  }
  return await api.get(
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
  } catch (error) {
    console.error("Error downloading image:", error);
  }
};