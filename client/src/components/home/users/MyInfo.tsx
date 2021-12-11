import React from "react";
import "./MyInfo.scss";

function MyInfo() {
  return (
    <div className="MyInfo">
      <div className="MyInfo__container">
        <div className="MyInfo__photo">
          <img src="https://picsum.photos/200" alt="" />
        </div>
        <p className="MyInfo__username">양혜빈</p>
      </div>
    </div>
  );
}

export default MyInfo;
