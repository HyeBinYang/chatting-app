import React from "react";
import MyInfo from "./users/MyInfo";
import UserList from "./users/UserList";
import ChatRooms from "./chatrooms/ChatRooms";
import RecommendedFriends from "./recommend/RecommendedFriends";
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
      case "/recommend/friends":
        return <RecommendedFriends />;
      default:
        return <></>;
    }
  };

  return <main className="HomeTemplate">{renderComponent()}</main>;
}

export default HomeTemplate;
