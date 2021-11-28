import React, { useState } from "react";
import { auth, database } from "../services/firebase";

function sendMessage(data) {
  return database.ref("chats").push({
    message: data.message,
    timestamp: data.timestamp,
    email: data.email,
  });
}

function InsertMessage() {
  const [message, setMessage] = useState<string>("");

  const onChange = (e) => setMessage(e.target.value);

  const sendChat = async (e) => {
    e.preventDefault();

    try {
      await sendMessage({
        message,
        timestamp: Date.now(),
        email: auth().currentUser.email,
      });
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form id="InsertMessage" onSubmit={sendChat}>
      <input type="text" onChange={onChange} value={message} name="message" />
      <button type="submit">Send</button>
    </form>
  );
}

export default InsertMessage;
