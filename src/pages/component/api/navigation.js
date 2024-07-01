import { mainPage, startPage } from "./pageAPI";

export const toMainPage = async () => {
  try {
    await mainPage();
  } catch (error) {
    console.error('Error navigating to Main Page:', error);
  }
};

export const toChatPage = async (navigate) => {
  try {
    await startPage();
    navigate('/Chat');
  } catch (error) {
    console.error('Error navigating to Chat Page:', error);
  }
};
