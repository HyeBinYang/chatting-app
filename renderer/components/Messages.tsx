import React, { useEffect, useState } from "react";
import { database } from "../services/firebase";
import InsertMessage from "./InsertMessage";
import Message from "./Message";

function Messages({ messages }) {
  return (
    <div id="Messages">
      <div className="Messages__title">
        <p>Messages</p>
      </div>
      <div className="Messages__message">
        {messages.map((message) => (
          <Message chat={message} key={message.timestamp} />
        ))}
      </div>
      <InsertMessage />
    </div>
  );
}

export default Messages;
