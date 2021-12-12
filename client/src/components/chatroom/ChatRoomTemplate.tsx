import React from "react";
import ChatRoomTop from "./ChatRoomTop";
import ChatRoomMain from "./ChatRoomMain";
import InputMessage from "./InputMessage";

function ChatRoomTemplate() {
  return (
    <div className="ChatRoomTemplate">
      <ChatRoomTop />
      <ChatRoomMain />
      <InputMessage />
    </div>
  );
}

export default ChatRoomTemplate;
