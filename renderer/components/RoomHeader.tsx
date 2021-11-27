import { useRouter } from "next/router";
import React from "react";

function RoomHeader() {
  const router = useRouter();

  return (
    <div id="RoomHeader">
      <p>방 제목</p>
      <span onClick={() => router.back()}>나가기</span>
    </div>
  );
}

export default RoomHeader;
