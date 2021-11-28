import { useRouter } from "next/router";
import { Redirect } from "next";
import React, { useContext, useCallback } from "react";
import { database } from "../services/firebase";
import { UserDispatch } from "../pages/_app";

const deleteMember = (rid, email) => {
  let key = "";
  if (rid && email) {
    database.ref(`ChatRoom/${rid}/Members`).on("value", (snapshot) => {
      snapshot.forEach((row) => {
        if (row.val().email === email) {
          key = row.key;
          return true;
        }
      });
    });

    database
      .ref(`ChatRoom/${rid}/Members`)
      .child(key)
      .remove()
      .then(() => {
        let memberCount = null;

        database.ref(`ChatRoom/${rid}/Members`).on("value", (snapshot) => {
          memberCount = snapshot.val();
        });

        if (!memberCount) {
          database.ref("ChatRoom").child(rid).remove();
        }
      })
      .catch((err) => console.log(err));
  }
};

function RoomHeader({ roomTitle }) {
  const router = useRouter();
  const { state, dispatch } = useContext(UserDispatch);

  const exitFromRoom = () => {
    deleteMember(router.query.rid, state.email);
    router.push("/single");
  };

  return (
    <div id="RoomHeader">
      <p>{roomTitle || "지워진 방 입니다."}</p>
      <span onClick={exitFromRoom}>나가기</span>
    </div>
  );
}

export default RoomHeader;
