import { useRouter } from "next/router";
import React, { useState } from "react";
import { auth, database } from "../../services/firebase";

function sendMessage(data, rid) {
  return database.ref(`ChatRoom/${rid}/Messages`).push({
    message: data.message,
    timestamp: data.timestamp,
    email: data.email,
  });
}

function InsertMessage() {
  const router = useRouter();

  const [message, setMessage] = useState<string>("");

  const onChange = (e) => setMessage(e.target.value);

  const sendChat = async (e) => {
    e.preventDefault();

    try {
      await sendMessage(
        {
          message,
          timestamp: Date.now(),
          email: auth().currentUser.email,
        },
        router.query.rid
      );
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
