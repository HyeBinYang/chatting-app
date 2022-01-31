import React from "react";
import Header from "../../Header";
import ChatRoom from "./ChatRoom";

const ChatRooms = () => {
  return (
    <div className="chatroom-container">
      <Header />
      <div className="chatrooms">
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
      </div>
    </div>
  );
};

export default ChatRooms;
