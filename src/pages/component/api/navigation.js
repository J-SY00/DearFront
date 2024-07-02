import { mainPage, startPage } from "./pageAPI";

export const toMainPage = async () => {
  try {
    await mainPage();
  } catch (error) {
    console.error('Error navigating to Main Page:', error);
  }
};

export const toChatPage = async (navigate) => {  
  navigate('/Chat');
  try {
    await startPage();
  } catch (error) {
    console.error('Error navigating to Chat Page:', error);
  }
};
