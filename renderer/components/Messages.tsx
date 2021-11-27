import React from "react";
import InsertMessage from "./InsertMessage";
import Message from "./Message";

function Messages() {
  return (
    <div id="Messages">
      <div className="Messages__title">
        <p>Messages</p>
      </div>
      <div className="Messages__message">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <InsertMessage />
    </div>
  );
}

export default Messages;
