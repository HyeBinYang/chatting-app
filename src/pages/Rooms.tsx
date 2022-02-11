import React from "react";
import ChatRooms from "../components/home/Main/ChatRooms";
import Sidebar from "../components/home/Sidebar";
import PopupStore from "../store/PopupStore";
import "../styles/home.scss";

const Rooms = () => {
  return (
    <PopupStore>
      <div className="home">
        <Sidebar />
        <ChatRooms />
      </div>
    </PopupStore>
  );
};

export default Rooms;
