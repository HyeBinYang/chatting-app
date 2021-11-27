import React from "react";

function Message({ chat }) {
  return (
    <div className="Message">
      <div className="Message__left">
        <div className="Message__image">
          <img src="https://picsum.photos/100" alt="" />
        </div>
        <div className="Message__content">
          <p>{chat.message}</p>
        </div>
      </div>
      <div className="Message__right">
        <span>{chat.email}</span>
        <span>{chat.timestamp}</span>
      </div>
    </div>
  );
}

export default Message;
