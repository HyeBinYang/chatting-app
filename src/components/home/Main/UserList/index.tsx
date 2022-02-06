import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../../store/UserStore";
import Header from "../../Header";
import MyInfo from "./MyInfo";
import User from "./User";

const UserList = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="userlist">
      <Header />
      <MyInfo />
      <div className="users">
        <span className="users-title">유저</span>
        {userContext.friends.map((friend) => (
          <User key={friend.id} friendInfo={friend} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
