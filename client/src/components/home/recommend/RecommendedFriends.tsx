import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import Friend from "./Friend";
import "../users/UserList.scss";
import { auth } from "../../../server/firebase";

interface IFriend {
  email: string;
  username: string;
}

function RecommendedFriends() {
  const [friendInput, setFriendInput] = useState<string>("");
  const [friends, setFriends] = useState<IFriend[]>([]);
  const [filteredFriends, setFilteredFriends] = useState<IFriend[]>([]);

  // function when mounted...
  // Get all users
  function getAllUsers(uid: string | undefined, friendArr: string[]): void {
    if (uid) {
      const db = getDatabase();
      onValue(
        ref(db, "users/"),
        (snapshot) => {
          if (snapshot.exists()) {
            const responseData = snapshot.val();
            const newFriends: IFriend[] = [];
            const userKeys = Object.keys(responseData).filter((userKey) => {
              return userKey !== uid && !friendArr.includes(responseData[userKey].username);
            });
            userKeys.forEach((userKey) => newFriends.push(responseData[userKey]));
            setFriends(newFriends);
          }
        },
        { onlyOnce: true }
      );
    }
  }

  // Get my friends
  function getMyFriends(uid: string | undefined): void {
    const db = getDatabase();
    onValue(
      ref(db, `users/${uid}/friends`),
      (snapshot) => {
        const friendArr: string[] = [];
        if (snapshot.exists()) {
          const responseData = snapshot.val();
          const myFriendsKeys = Object.keys(responseData);
          myFriendsKeys.forEach((key) => friendArr.push(responseData[key]));
        }
        getAllUsers(uid, friendArr);
      },
      { onlyOnce: true }
    );
  }

  // Get my uid
  function getMyUid(): void {
    let uid: string | undefined = "";
    auth().onAuthStateChanged((user) => {
      if (user) {
        uid = auth().currentUser?.uid;
        getMyFriends(uid);
      }
    });
  }

  const getRecommendedUsers = () => {
    getMyUid();
  };

  useEffect(() => {
    getRecommendedUsers();
  }, []);

  const deleteRecommendedFriend = (friend: IFriend): void => {
    setFriends(
      friends.filter((f) => {
        return f.email !== friend.email;
      })
    );

    setFilteredFriends(
      filteredFriends.filter((f) => {
        return f.email !== friend.email;
      })
    );
  };

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
        ? filteredFriends.map((friend) => (
            <Friend friend={friend} deleteRecommendedFriend={deleteRecommendedFriend} key={friend.email} />
          ))
        : friends.map((friend) => (
            <Friend friend={friend} deleteRecommendedFriend={deleteRecommendedFriend} key={friend.email} />
          ))}
    </div>
  );
}

export default RecommendedFriends;
