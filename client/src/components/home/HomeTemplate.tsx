import React from "react";
import MyInfo from "./users/MyInfo";
import UserList from "./users/UserList";
import "./HomeTemplate.scss";

function HomeTemplate() {
  return (
    <div className="HomeTemplate">
      <MyInfo />
      <UserList />
    </div>
  );
}

export default HomeTemplate;
