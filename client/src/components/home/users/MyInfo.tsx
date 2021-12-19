import React, { useContext } from "react";
import { UserContext } from "../../../store/user";
import "./MyInfo.scss";

function MyInfo() {
  const context = useContext(UserContext);

  return (
    <div className="MyInfo">
      <div className="MyInfo__container">
        <div className="MyInfo__photo">
          <img src="https://picsum.photos/200" alt="" />
        </div>
        <p className="MyInfo__username">{context?.state.username}</p>
      </div>
    </div>
  );
}

export default MyInfo;
