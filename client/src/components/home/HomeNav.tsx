import React, { useCallback, useEffect, useRef } from "react";
import { FaUser } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
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
      <Link to="">
        <AiOutlineSetting />
      </Link>
    </div>
  );
}

export default HomeNav;
