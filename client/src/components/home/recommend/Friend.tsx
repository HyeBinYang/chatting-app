import React from "react";
import { GrAdd } from "react-icons/gr";

interface Friend {
  email: string;
  username: string;
}

interface IFriend {
  friend: Friend;
}

function Friend({ friend }: IFriend) {
  return (
    <div className="UserList__user">
      <div className="user__container">
        <div className="user__photo">
          <img src="https://picsum.photos/200" alt="" />
        </div>
        <p className="user__username">{friend.username}</p>
        <GrAdd className="user__add" />
      </div>
    </div>
  );
}

export default Friend;
