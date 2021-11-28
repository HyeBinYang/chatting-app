import React from "react";
import RoomMember from "./RoomMember";

function RoomMembers({ members }) {
  return (
    <div id="RoomMembers">
      <div className="RoomMembers__title">
        <p>Members</p>
      </div>
      <div className="RoomMembers__members">
        {members.map((member, index) => (
          <RoomMember email={member.email} key={index} />
        ))}
      </div>
    </div>
  );
}

export default RoomMembers;
