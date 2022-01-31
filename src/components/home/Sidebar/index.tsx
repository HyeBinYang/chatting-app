import React from "react";
import { FaUser } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <FaUser />
      </Link>
      <Link to="/rooms">
        <BsFillChatFill />
      </Link>
    </div>
  );
};

export default Sidebar;
