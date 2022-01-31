import React from "react";
import { FaUser } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../api/firebase";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const onClickSignOut = () => {
    auth.signOut();
    navigate("/login");
  };

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

      <MdLogout onClick={onClickSignOut} />
    </div>
  );
};

export default Sidebar;
