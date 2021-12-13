import React, { useCallback, useEffect, useRef } from "react";
import { FaUser } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";
import "./HomeNav.scss";
import { Link, useLocation } from "react-router-dom";

function HomeNav() {
  const location = useLocation();

  const userRef = useRef<HTMLAnchorElement>(null);
  const roomRef = useRef<HTMLAnchorElement>(null);

  const setActive = useCallback(() => {
    switch (location.pathname) {
      case "/users":
        if (userRef.current) {
          userRef.current.className = "active";
        }
        break;
      case "/rooms":
        if (roomRef.current) {
          roomRef.current.className = "active";
        }
        break;
      default:
        break;
    }
  }, []);

  const logout = () => {
    console.log("sad");
  };

  useEffect(() => {
    setActive();
  }, []);

  return (
    <div className="homeNav">
      <Link to="/users" ref={userRef}>
        <FaUser />
      </Link>
      <Link to="/rooms" ref={roomRef}>
        <BiMessageRounded />
      </Link>
      <Link onClick={logout} to="/">
        <MdOutlineLogout />
      </Link>
    </div>
  );
}

export default HomeNav;
