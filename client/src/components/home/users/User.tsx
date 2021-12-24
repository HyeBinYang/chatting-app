import React from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./UserList.scss";
import { getDatabase, onValue, ref, remove } from "firebase/database";
import { auth } from "../../../server/firebase";

interface IProps {
  username: string;
  friends: string[];
  setFriends: React.Dispatch<React.SetStateAction<string[]>>;
}

function User({ username, friends, setFriends }: IProps) {
  const navigate = useNavigate();

  const enterRoom = () => {
    navigate("/room/123");
  };

  const onClickDelete = () => {
    auth().onAuthStateChanged(async (user) => {
      if (user) {
        const myUid = auth().currentUser?.uid;
        const db = getDatabase();

        onValue(
          ref(db, `users/${myUid}/friends/`),
          async (snapshot) => {
            const usersKeys = Object.keys(snapshot.val());
            const selectedUserKey = usersKeys.filter((key) => snapshot.val()[key] === username)[0];
            await remove(ref(db, `users/${myUid}/friends/${selectedUserKey}`));
            setFriends(friends.filter((username) => username !== snapshot.val()[selectedUserKey]));
          },
          { onlyOnce: true }
        );
      }
    });
  };

  return (
    <div onDoubleClick={enterRoom} className="UserList__user">
      <div className="user__container">
        <div className="user__photo">
          <img src="https://picsum.photos/200" alt="" />
        </div>
        <p className="user__username">{username}</p>
        <RiDeleteBin6Line className="user__add" onClick={onClickDelete} />
      </div>
    </div>
  );
}

export default React.memo(User);
