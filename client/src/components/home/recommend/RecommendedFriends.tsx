import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import Friend from "./Friend";
import "../users/UserList.scss";

interface IFriend {
  email: string;
  username: string;
}

function RecommendedFriends() {
  const [friendInput, setFriendInput] = useState<string>("");
  const [friends, setFriends] = useState<IFriend[]>([]);
  const [filteredFriends, setFilteredFriends] = useState<IFriend[]>([]);

  useEffect(() => {
    const db = getDatabase();
    onValue(ref(db, "users/"), (snapshot) => {
      const uid = Object.keys(snapshot.val())[0];
      setFriends([...friends, snapshot.val()[uid]]);
    });
  }, []);

  const searchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFriendInput(e.target.value);
    setFilteredFriends(friends.filter((friend) => friend.username.includes(e.target.value)));
  };

  return (
    <div className="UserList">
      <input
        onChange={searchUser}
        className="UserList__search"
        type="text"
        placeholder="친구 검색"
        value={friendInput}
      />
      <p className="UserList__info">추천 친구 {friends.length}</p>
      {friendInput
        ? filteredFriends.map((friend) => <Friend friend={friend} key={friend.email} />)
        : friends.map((friend) => <Friend friend={friend} key={friend.email} />)}
    </div>
  );
}

export default RecommendedFriends;
