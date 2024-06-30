import axios from 'axios';

//서버에서 결과 이미지 get
// export const getServerImage = async () => {
//   return await axios.get(
//     'https://picsum.photos/800/800', { 
//     responseType: 'blob' 
//     });
// };

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
  } catch (error) {
    console.error("Error downloading image:", error);
  }
};
