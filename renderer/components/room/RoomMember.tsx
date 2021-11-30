import React from "react";

function RoomMember({ email }) {
  return (
    <div className="RoomMember">
      <div className="RoomMember__image">
        <img src="https://picsum.photos/100" alt="user's profile" />
      </div>
      <div className="RoomMember__username">
        <p>{email}</p>
      </div>
    </div>
  );
}

export default RoomMember;
