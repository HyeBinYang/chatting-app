import React, { useContext } from "react";
import { UserContext } from "../../../../store/UserStore";

const MyInfo = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="myinfo">
      <div className="profile-image">
        <img src="https://picsum.photos/200" alt="프로필 이미지" />
      </div>
      <div className="profile-name">{userContext.name}</div>
    </div>
  );
};

export default MyInfo;
