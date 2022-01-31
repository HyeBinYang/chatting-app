import React from "react";
import { FaUser } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="sidebar">
      {currentPath === "/" ? (
        <Link to="/">
          <FaUser className="active" />
        </Link>
      ) : (
        <Link to="/">
          <FaUser />
        </Link>
      )}

      {currentPath === "/rooms" ? (
        <Link to="/rooms">
          <BsFillChatFill className="active" />
        </Link>
      ) : (
        <Link to="/rooms">
          <BsFillChatFill />
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
