import React from "react";
import "./ChatRoom.scss";
import ReceivedMessage from "./ReceivedMessage";
import MyMessage from "./MyMessage";

function ChatRoomMain({ messages }: { messages: any[] }) {
  return (
    <div className="ChatRoomMain">
      {messages.map((message) => (
        <MyMessage />
      ))}
    </div>
  );
}

export default ChatRoomMain;
