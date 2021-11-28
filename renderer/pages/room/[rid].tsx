import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import RoomHeader from "../../components/RoomHeader";
import RoomMain from "../../components/RoomMain";
import { database } from "../../services/firebase";

const getTitle = (rid) => {
  let title = "";
  if (rid) {
    database.ref(`ChatRoom/${rid}`).on("value", (snapshot) => {
      snapshot.forEach((row) => {
        if (row.key === "title") {
          title = row.val();
          return true;
        }
      });
    });
  }

  return title;
};

const getMembers = (rid) => {
  const members = [];
  if (rid) {
    database.ref(`ChatRoom/${rid}/Members`).on("value", (snapshot) => {
      snapshot.forEach((row) => {
        members.push(row.val());
      });
    });
  }

  return members;
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
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);

  const getRoomTitle = () => {
    setRoomTitle(getTitle(router.query.rid));
  };

  const getRoomMembers = () => {
    const memberList = getMembers(router.query.rid);
    setMembers(memberList);
  };

  const getRoomMessages = () => {
    const messageList = getMessages(router.query.rid);
    setMessages(messageList);
  };

  useEffect(() => {
    database.ref(`ChatRoom/${router.query.rid}`).on("child_added", getRoomTitle);
    database.ref(`ChatRoom/${router.query.rid}`).on("child_changed", getRoomTitle);
    database.ref(`ChatRoom/${router.query.rid}/Members`).on("child_added", getRoomMembers);
    database.ref(`ChatRoom/${router.query.rid}/Members`).on("child_changed", getRoomMembers);
    database.ref(`ChatRoom/${router.query.rid}/Messages`).on("child_added", getRoomMessages);
    database.ref(`ChatRoom/${router.query.rid}/Messages`).on("child_changed", getRoomMessages);
  }, []);

  return (
    <div>
      <RoomHeader roomTitle={roomTitle} />
      <RoomMain members={members} messages={messages} />
    </div>
  );
}

export default room;
