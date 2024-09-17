import React from 'react';
import Button from './Button';

export default function HeaderContainer({ onResetChatSelected }) {
  
  const handleResetClick = () => {
    const confirmed = window.confirm("All conversations and images will be deleted.");
    if (confirmed) {
      onResetChatSelected(); //Chat에서 전달받은 함수 : 리셋버튼 작동됨
    }
  };

  return (
    <header className="home-header">
      <h1>DEAR IMAGE</h1>
    <div className="chat-header">
        <Button text="Reset" onClick={handleResetClick} />
    </div>
    </header>
  );
}
