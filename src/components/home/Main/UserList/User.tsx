import { DocumentData } from "firebase/firestore";
import React from "react";

const User = ({ friendInfo }: { friendInfo: DocumentData }) => {
  return (
    <div className="user">
      <div className="profile-image">
        <img src="https://picsum.photos/200" alt="프로필 이미지" />
      </div>
      <span className="profile-name">{friendInfo.name}</span>
    </div>
  );
};

export default User;
