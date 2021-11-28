import { useRouter } from "next/router";
import React from "react";

function RoomHeader({ roomTitle }) {
  const router = useRouter();

  return (
    <div id="RoomHeader">
      <p>{roomTitle}</p>
      <span onClick={() => router.back()}>나가기</span>
    </div>
  );
}

export default RoomHeader;
