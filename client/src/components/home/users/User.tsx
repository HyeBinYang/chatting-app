import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./UserList.scss";
import { getDatabase, onValue, push, ref, remove } from "firebase/database";
import { auth } from "../../../server/firebase";
import { UserContext } from "../../../store/user";

interface IProps {
  username: string;
  friends: string[];
  setFriends: React.Dispatch<React.SetStateAction<string[]>>;
}

function User({ username, friends, setFriends }: IProps) {
  const context = useContext(UserContext);
  const navigate = useNavigate();

  const makeNewRoom = async () => {
    const db = getDatabase();
    const newRoom = await push(ref(db, "chatrooms/"), {
      members: [context?.state.username, username],
    });

    navigate(`/room/${newRoom.key}`, { state: { to: username } });
  };

  const checkRoomExist = () => {
    const db = getDatabase();

    onValue(
      ref(db, "chatrooms/"),
      (snapshot) => {
        let rid: string | null = "";
        let isExist = false;

        if (snapshot.exists()) {
          snapshot.forEach((row) => {
            const key = row.key;
            const members = row.val().members;
            if (members.includes(context?.state.username) && members.includes(username)) {
              isExist = true;
              rid = key;
            }
          });

          if (!isExist) {
            makeNewRoom();
          } else {
            navigate(`/room/${rid}`, { state: { to: username } });
          }
        }
      },
      { onlyOnce: true }
    );
  };

  const onDoubleClickRoom = () => {
    checkRoomExist();
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
    <div onDoubleClick={onDoubleClickRoom} className="UserList__user">
      <div className="user__container">
        <div className="user__photo">
          <img src="https://picsum.photos/200" alt="" />
        </div>
        <p className="user__username">{username}</p>
        <RiDeleteBin6Line className="user__icon" onClick={onClickDelete} />
      </div>
    </div>
  );
}

export default React.memo(User);
