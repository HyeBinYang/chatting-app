import React from "react";
import "./ChatRoom.scss";
import ReceivedMessage from "./ReceivedMessage";
import MyMessage from "./MyMessage";

function ChatRoomMain() {
  return (
    <div className="ChatRoomMain">
      <ReceivedMessage />
      <MyMessage />
      <MyMessage />
      <ReceivedMessage />
      <MyMessage />
    </div>
  );
}

export default ChatRoomMain;
