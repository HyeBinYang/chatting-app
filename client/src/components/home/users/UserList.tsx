import { getDatabase, onValue, ref } from "firebase/database";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../../server/firebase";
import { UserContext } from "../../../store/user";
import User from "./User";
import "./UserList.scss";

interface Friend {
  id: number;
}

function UserList() {
  const context = useContext(UserContext);
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        const db = getDatabase();

        onValue(ref(db, `users/${uid}`), (snapshot) => {
          if (snapshot.exists()) {
            context?.dispatch({ type: "CREATE_USER", payload: { username: snapshot.val().username } });
          }
        });

        onValue(ref(db, `users/${uid}/friends`), (snapshot) => {
          console.log(snapshot.exists());
        });
      }
    });
  }, []);

  return (
    <div className="UserList">
      <p className="UserList__info">친구 {friends.length}</p>
      {friends.map((friend) => (
        <User key={friend.id} />
      ))}
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </div>
  );
}

export default UserList;
