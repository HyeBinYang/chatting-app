import React from "react";
import { FaUser } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import "./HomeNav.scss";
import { Link } from "react-router-dom";

function HomeNav() {
  return (
    <div className="homeNav">
      <Link to="">
        <FaUser />
      </Link>
      <Link to="">
        <BiMessageRounded />
      </Link>
      <Link to="">
        <AiOutlineSetting />
      </Link>
    </div>
  );
}

export default HomeNav;
