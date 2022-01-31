import React from "react";
import Header from "../../Header";
import MyInfo from "./MyInfo";
import User from "./User";

const UserList = () => {
  return (
    <div className="userlist">
      <Header />
      <MyInfo />
      <div className="users">
        <span>유저</span>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
};

export default UserList;
