import React, { useContext } from "react";
import { userContext } from "../../../store/user";
import "./MyInfo.scss";

function MyInfo() {
  const context = useContext(userContext);

  return (
    <div className="MyInfo">
      <div className="MyInfo__container">
        <div className="MyInfo__photo">
          <img src="https://picsum.photos/200" alt="" />
        </div>
        <p className="MyInfo__username">{context?.username}</p>
      </div>
    </div>
  );
}

export default MyInfo;
