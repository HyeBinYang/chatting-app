import React from "react";
import User from "./User";
import "./UserList.scss";

function UserList() {
  return (
    <div className="UserList">
      <p className="UserList__info">유저 4</p>
      <User />
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
