import React from "react";
import Messages from "./Messages";
import RoomMembers from "./RoomMembers";

function RoomMain({ members, messages }) {
  return (
    <div id="RoomMain">
      <RoomMembers members={members} />
      <Messages messages={messages} />
    </div>
  );
}

export default RoomMain;
