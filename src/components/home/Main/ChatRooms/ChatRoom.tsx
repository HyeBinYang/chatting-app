import React from "react";

const ChatRoom = () => {
  return (
    <div className="chatroom">
      <div className="chatroom-left">
        <div className="chatroom-image">
          <img src="https://picsum.photos/200" alt="채팅방 이미지" />
        </div>
        <div className="chatroom-desc">
          <h3>닉네임</h3>
          <p>채팅 내용</p>
        </div>
      </div>
      <div className="chatroom-right">
        <span>오후 2:53</span>
      </div>
    </div>
  );
};

export default ChatRoom;
