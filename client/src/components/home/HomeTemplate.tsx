import React from "react";
import MyInfo from "./users/MyInfo";
import UserList from "./users/UserList";
import ChatRooms from "./chatrooms/ChatRooms";
import "./HomeTemplate.scss";
import { useLocation } from "react-router-dom";

function HomeTemplate() {
  const location = useLocation();

  const renderComponent = () => {
    switch (location.pathname) {
      case "/users":
        return (
          <>
            <MyInfo />
            <UserList />
          </>
        );
      case "/rooms":
        return <ChatRooms />;
      default:
        return <></>;
    }
  };

  return <div className="HomeTemplate">{renderComponent()}</div>;
}

export default HomeTemplate;
