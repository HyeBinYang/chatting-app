import React from "react";
import { useLocation } from "react-router-dom";

function ReceivedMessage() {
  const location = useLocation();

  return (
    <div className="ReceivedMessage">
      <div className="ReceivedMessage__photo">
        <img src="https://picsum.photos/200" alt="" />
      </div>
      <div className="ReceivedMessage__info">
        <div className="info__username">{location.state.to}</div>
        <div className="info__message">
          <span>
            메세지 내용메세지 내용메세지 내용메세지 내용메세지 내용메세지 내용메세지 내용메세지 내용메세지 내용
          </span>
          <span>오후 2:10</span>
        </div>
      </div>
    </div>
  );
}

export default ReceivedMessage;
