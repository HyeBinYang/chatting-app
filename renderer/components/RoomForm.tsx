import React, { useContext, useState } from "react";
import { database } from "../services/firebase";
import { UserDispatch } from "../pages/_app";

function RoomForm() {
  const [roomTitle, setRoomTitle] = useState("");
  const { state, dispatch } = useContext(UserDispatch);

  const onChangeTitle = (e) => {
    setRoomTitle(e.target.value);
  };

  const makeChatRoom = (e) => {
    e.preventDefault();

    const newChatRoom = database.ref("ChatRoom").push({
      title: roomTitle,
    });

    database.ref(`ChatRoom/${newChatRoom.key}/Members`).push({
      email: state.email,
    });
  };

  return (
    <form id="roomform" onSubmit={makeChatRoom}>
      <input type="text" placeholder="방 제목" value={roomTitle} onChange={onChangeTitle} />
      <button>만들기</button>
    </form>
  );
}

export default RoomForm;
