import React from "react";
import "./ChatRoom.scss";

function ChatRoomTop() {
  return (
    <div className="ChatRoomTop">
      <div className="ChatRoomTop__left">
        <div className="left__photo">
          <img src="https://picsum.photos/200" alt="" />
        </div>
      </div>
      <div className="ChatRoomTop__right">
        <div className="right__username">문어햄</div>
        <div className="right__icons">나가기</div>
      </div>
    </div>
  );
}

export default ChatRoomTop;
