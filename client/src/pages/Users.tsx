import React from "react";
import HomeNav from "../components/home/HomeNav";
import HomeTemplate from "../components/home/HomeTemplate";
import "./homePage.scss";

function Users() {
  return (
    <div className="homePage">
      <HomeNav />
      <HomeTemplate />
    </div>
  );
}

export default Users;
