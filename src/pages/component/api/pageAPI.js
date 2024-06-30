import axios from 'axios';

const baseURL = 'http://localhost:5173';

const api = axios.create({
  baseURL,
});

export const mainPage = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('MainPage error : ', error);
    throw error;
  }
};

export const setPage = async () => {
  try {
    const response = await api.get('/set');
    return response.data;
  } catch (error) {
    console.error('SetPage Error : ', error);
    throw error;
  }
};
