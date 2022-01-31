import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <header className="header">
      <h1>채팅</h1>
      <div className="header-buttons">
        <AiOutlineSearch />
      </div>
    </header>
  );
};

export default Header;
