import { useRouter } from "next/router";
import React, { useEffect, useState, useCallback } from "react";
import { database } from "../../services/firebase";
import InsertMessage from "./InsertMessage";
import Message from "./Message";

const getMessages = (rid) => {
  if (!rid) return;

  const messages = [];
  database.ref(`ChatRoom/${rid}/Messages`).on("value", (snapshot) => {
    snapshot.forEach((row) => {
      messages.push(row.val());
      return false;
    });
  });

  return messages;
};

function Messages() {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [rid, setRid] = useState<string | string[]>("");

  const getRoomMessages = useCallback(() => {
    const newMessages = getMessages(rid);
    if (newMessages) setMessages(newMessages);
  }, [rid]);

  useEffect(() => {
    if (router && router.query) {
      setRid(router.query.rid);
    }
  }, [router]);

  useEffect(() => {
    database.ref(`ChatRoom/${rid}/Messages`).on("child_added", getRoomMessages);
    database.ref(`ChatRoom/${rid}/Messages`).on("child_changed", getRoomMessages);
  }, [rid]);

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
