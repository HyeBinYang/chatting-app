import React from "react";

function Message() {
  return (
    <div className="Message">
      <div className="Message__left">
        <div className="Message__image">
          <img src="https://picsum.photos/100" alt="" />
        </div>
        <div className="Message__content">
          <p>message 1</p>
        </div>
      </div>
      <div className="Message__right">
        <span>username</span>
        <span>시간</span>
      </div>
    </div>
  );
}

export default Message;
