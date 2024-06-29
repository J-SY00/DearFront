import React from 'react';
import Button from './Button';

export default function HeaderContainer({ onResetChatSelected }) {
  
  const handleResetClick = () => {
    const confirmed = window.confirm("Remove all conversations?");
    if (confirmed) {
      onResetChatSelected(); //Chat에서 전달받은 함수 : 리셋버튼 작동됨
    }
  };

  return (
    <div className="chat-header">
      <Button text="Reset" onClick={handleResetClick} />
    </div>
  );
}
