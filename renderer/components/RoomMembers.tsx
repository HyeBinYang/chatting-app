import React from "react";
import RoomMember from "./RoomMember";

function RoomMembers() {
  return (
    <div id="RoomMembers">
      <div className="RoomMembers__title">
        <p>Members</p>
      </div>
      <div className="RoomMembers__members">
        <RoomMember />
        <RoomMember />
        <RoomMember />
        <RoomMember />
        <RoomMember />
        <RoomMember />
        <RoomMember />
        <RoomMember />
        <RoomMember />
        <RoomMember />
        <RoomMember />
        <RoomMember />
        <RoomMember />
        <RoomMember />
      </div>
    </div>
  );
}

export default RoomMembers;
