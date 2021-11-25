import React from "react";

function RoomForm() {
  return (
    <div id="roomform">
      <input type="text" placeholder="방 제목" />
      <input type="password" placeholder="방 비밀번호" />
      <button>만들기</button>
    </div>
  );
}

export default RoomForm;
