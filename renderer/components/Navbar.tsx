import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <ul id="nav">
      <li className="menu">
        <Link href="/users">유저 목록</Link>
      </li>
      <li className="menu">
        <Link href="/single">1 대 1 채팅방</Link>
      </li>
      <li className="menu">
        <Link href="/group">단체 채팅방</Link>
      </li>
      <li className="menu">
        <Link href="/make">채팅방 만들기</Link>
      </li>
    </ul>
  );
}
export default Navbar;
