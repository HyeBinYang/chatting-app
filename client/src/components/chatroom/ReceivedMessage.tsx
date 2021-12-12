import React from "react";

function ReceivedMessage() {
  return (
    <div className="ReceivedMessage">
      <div className="ReceivedMessage__photo">
        <img src="https://picsum.photos/200" alt="" />
      </div>
      <div className="ReceivedMessage__info">
        <div className="info__username">username</div>
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
