import { getDatabase, onValue, ref } from "firebase/database";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../../server/firebase";
import { UserContext } from "../../../store/user";
import User from "./User";
import "./UserList.scss";

function UserList() {
  const context = useContext(UserContext);
  const [friends, setFriends] = useState<string[]>([]);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        const db = getDatabase();

        onValue(
          ref(db, `users/${uid}/`),
          (snapshot) => {
            if (snapshot.exists()) {
              context?.dispatch({ type: "CREATE_USER", payload: { username: snapshot.val().username } });
            }
          },
          { onlyOnce: true }
        );

        onValue(
          ref(db, `users/${uid}/friends/`),
          (snapshot) => {
            if (snapshot.exists()) {
              const friendArr: string[] = [];
              const responseData = snapshot.val();
              const friendKeys = Object.keys(responseData);
              friendKeys.forEach((key) => {
                friendArr.push(responseData[key]);
              });
              setFriends(friendArr);
            }
          },
          { onlyOnce: true }
        );
      }
    });
  }, []);

  return (
    <div className="UserList">
      <p className="UserList__info">친구 {friends.length}</p>
      {friends.map((friend) => (
        <User key={friend} username={friend} friends={friends} setFriends={setFriends} />
      ))}
    </div>
  );
}

export default UserList;
