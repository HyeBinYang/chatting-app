import React, { useCallback, useContext, useEffect, useRef } from "react";
import { FaUser } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";
import "./HomeNav.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../server/firebase";
import { UserContext } from "../../store/user";

function HomeNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const context = useContext(UserContext);

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

  const logout = async () => {
    await auth()
      .signOut()
      .catch((err) => console.error(err));

    context?.dispatch({ type: "DELETE_USER" });
    navigate("/");
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
      <button onClick={logout}>
        <MdOutlineLogout />
      </button>
    </div>
  );
}

export default HomeNav;
