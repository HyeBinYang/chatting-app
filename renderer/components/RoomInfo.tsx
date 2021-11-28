import { useRouter } from "next/router";
import React from "react";
import { database } from "../services/firebase";

function RoomInfo({ room }) {
  const router = useRouter();

  const handleDoubleClick = () => {
    router.push({
      pathname: `/room/[rid]`,
      query: { rid: room.rid },
    });
  };

  return (
    <div className="room" onDoubleClick={handleDoubleClick}>
      <h1>{room.title}</h1>
      <span>Member : </span>
      {Object.keys(room.Members).map((memberKey) => (
        <b>{room.Members[memberKey].email}</b>
      ))}
    </div>
  );
}

export default RoomInfo;
