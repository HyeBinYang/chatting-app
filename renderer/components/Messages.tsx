import React, { useEffect, useState } from "react";
import { database } from "../services/firebase";
import InsertMessage from "./InsertMessage";
import Message from "./Message";

function getChats() {
  let chats = [];
  database.ref("chats").on("value", (snapshot) => {
    snapshot.forEach((row) => {
      chats.push(row.val());
      return false;
    });
  });
  return chats;
}

function Messages() {
  const [chats, setChats] = useState([]);

  const getChatList = () => {
    const chatList = getChats();
    setChats(chatList);
  };

  useEffect(() => {
    database.ref("chats").on("child_added", getChatList);
    database.ref("chats").on("child_changed", getChatList);
  }, []);

  return (
    <div id="Messages">
      <div className="Messages__title">
        <p>Messages</p>
      </div>
      <div className="Messages__message">
        {chats.map((chat) => (
          <Message chat={chat} key={chat.timestamp} />
        ))}
      </div>
      <InsertMessage />
    </div>
  );
}

export default Messages;
