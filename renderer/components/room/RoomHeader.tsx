import { useRouter } from "next/router";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { database } from "../../services/firebase";
import { UserDispatch } from "../../pages/_app";

const getTitle = (rid) => {
  if (!rid) return;

  let title = "";
  database.ref(`ChatRoom/${rid}`).on("value", (snapshot) => {
    snapshot.forEach((row) => {
      if (row.key === "title") {
        title = row.val();
        return true;
      }
    });
  });

  return title;
};

const deleteMember = (rid, email) => {
  let key = "";

  try {
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
  } catch (error) {
    console.log(error);
  }
};

function RoomHeader() {
  const router = useRouter();
  const { state, dispatch } = useContext(UserDispatch);
  const [roomTitle, setRoomTitle] = useState("");
  const [rid, setRid] = useState<string | string[]>("");

  const getRoomTitle = useCallback(() => {
    const newTitle = getTitle(rid);
    if (newTitle) setRoomTitle(newTitle);
  }, [rid]);

  const exitFromRoom = useCallback(() => {
    deleteMember(router.query.rid, state.email);
    router.push("/rooms");
  }, [state]);

  useEffect(() => {
    if (router && router.query) {
      setRid(router.query.rid);
    }
  }, [router]);

  useEffect(() => {
    database.ref(`ChatRoom/${rid}`).on("child_added", getRoomTitle);
    database.ref(`ChatRoom/${rid}`).on("child_changed", getRoomTitle);
  }, [rid]);

  return (
    <div id="RoomHeader">
      <p>{roomTitle || "지워진 방 입니다."}</p>
      <span onClick={exitFromRoom}>나가기</span>
    </div>
  );
}

export default RoomHeader;
