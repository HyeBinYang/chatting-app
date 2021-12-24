import React from "react";
import { GrAdd } from "react-icons/gr";
import { getDatabase, ref, push } from "firebase/database";
import { auth } from "../../../server/firebase";

interface FriendState {
  email: string;
  username: string;
}

interface IFriend {
  friend: FriendState;
  deleteRecommendedFriend: (friend: FriendState) => void;
}

function Friend({ friend, deleteRecommendedFriend }: IFriend) {
  const addFriend = () => {
    const uid = auth().currentUser?.uid;
    const db = getDatabase();
    push(ref(db, `users/${uid}/friends/`), friend.username);
    deleteRecommendedFriend(friend);
  };

  return (
    <div className="UserList__user">
      <div className="user__container">
        <div className="user__photo">
          <img src="https://picsum.photos/200" alt="" />
        </div>
        <p className="user__username">{friend.username}</p>
        <GrAdd className="user__icon" onClick={addFriend} />
      </div>
    </div>
  );
}

export default React.memo(Friend);
