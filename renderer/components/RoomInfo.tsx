import { useRouter } from "next/router";
import React from "react";

function RoomInfo() {
  const router = useRouter();

  const handleDoubleClick = () => {
    router.push("/room");
  };

  return (
    <div className="room" onDoubleClick={handleDoubleClick}>
      <h1>방 제목</h1>
      <span>Member : </span>
      <b>유저1</b>
    </div>
  );
}

export default RoomInfo;
