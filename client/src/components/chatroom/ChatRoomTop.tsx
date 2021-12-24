import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./ChatRoom.scss";

function ChatRoomTop() {
  const location = useLocation();

  return (
    <div className="ChatRoomTop">
      <div className="ChatRoomTop__left">
        <div className="left__photo">
          <img src="https://picsum.photos/200" alt="" />
        </div>
      </div>
      <div className="ChatRoomTop__right">
        <div className="right__username">{location.state.to}</div>
        <div className="right__icons">
          <Link to="/users">나가기</Link>
        </div>
      </div>
    </div>
  );
}

export default ChatRoomTop;
