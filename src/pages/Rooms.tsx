import React from "react";
import ChatRooms from "../components/home/Main/ChatRooms";
import Sidebar from "../components/home/Sidebar";
import "../styles/home.scss";

const Rooms = () => {
  return (
    <div className="home">
      <Sidebar />
      <ChatRooms />
    </div>
  );
};

export default Rooms;
