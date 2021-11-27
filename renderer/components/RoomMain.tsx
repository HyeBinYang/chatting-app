import React from "react";
import Messages from "./Messages";
import RoomMembers from "./RoomMembers";

function RoomMain() {
  return (
    <div id="RoomMain">
      <RoomMembers />
      <Messages />
    </div>
  );
}

export default RoomMain;
