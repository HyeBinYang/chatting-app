import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { database } from "../services/firebase";
import RoomMember from "./RoomMember";

const getMembers = (rid) => {
  const members = [];
  if (rid) {
    database.ref(`ChatRoom/${rid}/Members`).on("value", (snapshot) => {
      snapshot.forEach((row) => {
        members.push(row.val());
        return false;
      });
    });
  }

  return members;
};

function RoomMembers() {
  const router = useRouter();
  const [members, setMembers] = useState([]);

  const getRoomMembers = () => {
    const memberList = getMembers(router.query.rid);
    setMembers(memberList);
  };

  useEffect(() => {
    database.ref(`ChatRoom/${router.query.rid}/Members`).on("child_added", getRoomMembers);
    database.ref(`ChatRoom/${router.query.rid}/Members`).on("child_changed", getRoomMembers);
    database.ref(`ChatRoom/${router.query.rid}/Members`).on("child_removed", getRoomMembers);
  }, []);

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
