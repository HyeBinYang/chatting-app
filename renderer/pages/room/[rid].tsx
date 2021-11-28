import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import RoomHeader from "../../components/RoomHeader";
import RoomMain from "../../components/RoomMain";
import { database } from "../../services/firebase";

const getTitle = (rid) => {
  let title = "";
  database.ref(`ChatRoom/${rid}`).on("value", (snapshot) => {
    snapshot.forEach((row) => {
      if (row.key === "title") {
        title = row.val();
        return true;
      }
    });
  });
  return title;
};

const getMessages = (rid) => {
  const messages = [];
  if (rid) {
    database.ref(`ChatRoom/${rid}/Messages`).on("value", (snapshot) => {
      snapshot.forEach((row) => {
        messages.push(row.val());
      });
    });
  }

  return messages;
};

function room() {
  const router = useRouter();
  const [roomTitle, setRoomTitle] = useState("");
  const [messages, setMessages] = useState([]);

  const getRoomTitle = useCallback(() => {
    setRoomTitle(getTitle(router.query.rid));
  }, [roomTitle]);

  const getRoomMessages = () => {
    const messageList = getMessages(router.query.rid);
    setMessages(messageList);
  };

  useEffect(() => {
    database.ref(`ChatRoom/${router.query.rid}`).on("child_added", getRoomTitle);
    database.ref(`ChatRoom/${router.query.rid}`).on("child_changed", getRoomTitle);
    database.ref(`ChatRoom/${router.query.rid}/Messages`).on("child_added", getRoomMessages);
    database.ref(`ChatRoom/${router.query.rid}/Messages`).on("child_changed", getRoomMessages);
  }, []);

  return (
    <div>
      <RoomHeader roomTitle={roomTitle} />
      <RoomMain messages={messages} />
    </div>
  );
}

export default room;
