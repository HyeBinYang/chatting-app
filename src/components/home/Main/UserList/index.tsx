import React, { useContext } from "react";
import { UserContext } from "../../../../store/UserStore";
import Header from "../../Header";
import MyInfo from "./MyInfo";

const UserList = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="userlist">
      <Header />
      <MyInfo />
      <div className="users">
        <span className="users-title">유저</span>
        {userContext.mapToComponent(userContext.friends)}
      </div>
    </div>
  );
};

export default UserList;
