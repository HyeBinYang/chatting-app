import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="header">
      <div className="header-contents">
        {currentPath === "/" ? <h1>유저 목록</h1> : <h1>채팅</h1>}
        {/* <div className="header-buttons">
          <AiOutlineSearch onClick={onClickSearchToggle} />
        </div> */}
      </div>

      {currentPath === "/" && (
        <div className="header-search">
          <input type="text" placeholder="유저 검색" />
        </div>
      )}
    </header>
  );
};

export default Header;
