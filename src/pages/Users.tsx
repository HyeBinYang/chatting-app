import React from "react";
import UserList from "../components/home/Main/UserList";
import Sidebar from "../components/home/Sidebar";
import "../styles/home.scss";

const Users = () => {
  return (
    <div className="home">
      <Sidebar />
      <UserList />
    </div>
  );
};

export default Users;
