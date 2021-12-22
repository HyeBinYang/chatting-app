import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import Friend from "./Friend";
import "../users/UserList.scss";

interface IFriend {
  email: string;
  username: string;
}

function RecommendedFriends() {
  const [friends, setFriends] = useState<IFriend[]>([]);

  useEffect(() => {
    const db = getDatabase();
    onValue(ref(db, "users/"), (snapshot) => {
      const uid = Object.keys(snapshot.val())[0];
      setFriends([...friends, snapshot.val()[uid]]);
    });
  }, []);

  return (
    <div className="UserList">
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.email} />
      ))}
    </div>
  );
}

export default RecommendedFriends;
