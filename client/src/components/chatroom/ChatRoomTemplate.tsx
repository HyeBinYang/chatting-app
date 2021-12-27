import React, { useState } from "react";
import ChatRoomTop from "./ChatRoomTop";
import ChatRoomMain from "./ChatRoomMain";
import InputMessage from "./InputMessage";

function ChatRoomTemplate() {
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <div className="ChatRoomTemplate">
      <ChatRoomTop />
      <ChatRoomMain messages={messages} />
      <InputMessage messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default ChatRoomTemplate;
