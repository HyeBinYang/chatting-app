import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { database } from "../../services/firebase";
import RoomMember from "./RoomMember";

const getMembers = (rid) => {
  if (!rid) return;

  const members = [];
  database.ref(`ChatRoom/${rid}/Members`).on("value", (snapshot) => {
    snapshot.forEach((row) => {
      members.push(row.val());
      return false;
    });
  });

  return members;
};

function RoomMembers() {
  const router = useRouter();
  const [members, setMembers] = useState([]);
  const [rid, setRid] = useState<string | string[]>("");

  const getRoomMembers = useCallback(() => {
    const memberList = getMembers(rid);
    if (memberList) setMembers(memberList);
  }, [rid]);

  useEffect(() => {
    if (router && router.query) {
      setRid(router.query.rid);
    }
  }, [router]);

  useEffect(() => {
    database.ref(`ChatRoom/${rid}/Members`).on("child_added", getRoomMembers);
    database.ref(`ChatRoom/${rid}/Members`).on("child_changed", getRoomMembers);
    database.ref(`ChatRoom/${rid}/Members`).on("child_removed", getRoomMembers);
  }, [rid]);

  return (
    <div id="RoomMembers">
      <div className="RoomMembers__title">
        <p>Members</p>
      </div>
      <div className="RoomMembers__members">
        {members.map((member, index) => (
          <RoomMember email={member.email} key={index} />
        ))}
      </div>
    </div>
  );
}

export default RoomMembers;
