import React, { useContext, useState } from "react";
import { RiChatNewFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { PopupContext } from "../../../store/PopupStore";
import { UserContext } from "../../../store/UserStore";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const popupContext = useContext(PopupContext);
  const userContext = useContext(UserContext);

  const onChangeSearchUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    userContext.setKeyword(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-contents">
        {currentPath === "/" ? (
          <h1>유저 목록</h1>
        ) : (
          <>
            <h1>채팅</h1>
            <div className="header-buttons">
              <RiChatNewFill onClick={() => popupContext.setInvitationPopup(true)} />
            </div>
          </>
        )}
      </div>

      {currentPath === "/" && (
        <div className="header-search">
          <input onChange={onChangeSearchUsername} type="text" placeholder="유저 검색" value={userContext.keyword} />
        </div>
      )}
    </header>
  );
};

export default Header;
