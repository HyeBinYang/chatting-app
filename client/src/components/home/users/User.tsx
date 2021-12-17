import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserList.scss";

function User() {
  const navigate = useNavigate();

  const enterRoom = () => {
    navigate("/room/123");
  };

  return (
    <div onDoubleClick={enterRoom} className="UserList__user">
      <div className="user__container">
        <div className="user__photo">
          <img src="https://picsum.photos/200" alt="" />
        </div>
        <p className="user__username">문어햄</p>
      </div>
    </div>
  );
}

export default User;
