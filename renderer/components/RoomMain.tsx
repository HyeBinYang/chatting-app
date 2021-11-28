import React from "react";
import Messages from "./Messages";
import RoomMembers from "./RoomMembers";

function RoomMain({ messages }) {
  return (
    <div id="RoomMain">
      <RoomMembers />
      <Messages messages={messages} />
    </div>
  );
}

export default RoomMain;
