import React, { useEffect, useState } from "react";
import { database } from "../services/firebase";
import RoomInfo from "./RoomInfo";

function getRooms() {
  let rooms = [];
  database.ref("ChatRoom").on("value", (snapshot) => {
    snapshot.forEach((row) => {
      rooms.push({ ...row.val(), rid: row.key });
      return false;
    });
  });
  return rooms;
}

function RoomList() {
  const [rooms, setRooms] = useState([]);

  const getChatList = () => {
    const roomList = getRooms();
    setRooms(roomList);
  };

  useEffect(() => {
    database.ref("ChatRoom").on("child_added", getChatList);
    database.ref("ChatRoom").on("child_changed", getChatList);
    database.ref("ChatRoom").on("child_removed", getChatList);
  }, []);

  return (
    <div id="roomlist">
      {rooms.map((room, index) => (
        <RoomInfo room={room} key={index} />
      ))}
    </div>
  );
}

export default RoomList;
