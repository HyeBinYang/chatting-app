import React from "react";
import MyInfo from "./users/MyInfo";
import UserList from "./users/UserList";
import ChatRooms from "./chatrooms/ChatRooms";
import "./HomeTemplate.scss";

function HomeTemplate() {
  return (
    <div className="HomeTemplate">
      {/* <MyInfo />
      <UserList /> */}
      <ChatRooms />
    </div>
  );
}

export default HomeTemplate;
