import { mainPage, setPage } from "../api/pageAPI";

export const toMainPage = async (navigate) => {
  try {
    const data = await mainPage();
    console.log('Main Page Data:', data);
    navigate('/');
  } catch (error) {
    console.error('Error navigating to Main Page:', error);
    alert('Failed to navigate to Main Page');
  }
};

export const toChatPage = async (navigate) => {
  try {
    const data = await setPage();
    console.log('Chat Page Data:', data);
    navigate('/Chat');
  } catch (error) {
    console.error('Error navigating to Chat Page:', error);
    alert('Failed to navigate to Chat Page');
  }
};
