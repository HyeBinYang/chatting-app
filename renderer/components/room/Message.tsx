import React from "react";

function getDate(timestamp) {
  const date = new Date(timestamp);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}

function Message({ chat }) {
  getDate(chat.timestamp);

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
        <span>{getDate(chat.timestamp)}</span>
      </div>
    </div>
  );
}

export default React.memo(Message);
