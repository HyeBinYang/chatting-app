import React, { useEffect, useState } from "react";
import { database } from "../services/firebase";
import RoomInfo from "./RoomInfo";

function RoomList() {
  const [rooms, setRooms] = useState([]);

  function getRooms() {
    let newRooms = [];
    database.ref("ChatRoom").on("value", (snapshot) => {
      snapshot.forEach((row) => {
        newRooms.push({ ...row.val(), rid: row.key });
        return false;
      });
      setRooms(newRooms);
    });
  }

  useEffect(() => {
    getRooms();
    database.ref("ChatRoom").on("child_added", getRooms);
    database.ref("ChatRoom").on("child_removed", getRooms);
  }, []);

  return (
    <div id="roomlist">{rooms.map((room) => (room?.Members ? <RoomInfo room={room} key={room.rid} /> : null))}</div>
  );
}

export default RoomList;
