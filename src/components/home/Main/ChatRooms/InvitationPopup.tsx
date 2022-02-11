import React from "react";

const InvitationPopup = () => {
  return (
    <div className="popup">
      <div className="popup__search">
        <input type="text" placeholder="친구 검색" />
      </div>
      <ul className="popup__userlist">
        <li className="user">
          <div className="user__info">
            <img src="" alt="" />
            <span className="user__name">로빈</span>
          </div>
          <div className="user__checkbox">
            <input onChange={() => console.log("sda")} className="checkbox" type="checkbox" id="user" />
            {/* <label htmlFor="user"></label> */}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default InvitationPopup;
