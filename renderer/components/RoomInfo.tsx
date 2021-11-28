import { useRouter } from "next/router";
import React, { useContext } from "react";
import { database } from "../services/firebase";
import { UserDispatch } from "../pages/_app";

function RoomInfo({ room }) {
  const router = useRouter();
  const { state, dispatch } = useContext(UserDispatch);

  const handleDoubleClick = () => {
    database.ref(`ChatRoom/${room.rid}/Members`).push({
      email: state.email,
    });

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
        <b key={room.Members[memberKey].email}>{room.Members[memberKey].email}</b>
      ))}
    </div>
  );
}

export default RoomInfo;
