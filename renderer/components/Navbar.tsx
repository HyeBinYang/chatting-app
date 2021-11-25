import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <ul id="nav">
      <Link href="/users">
        <li className="menu">유저 목록</li>
      </Link>
      <Link href="/single">
        <li className="menu">1 대 1 채팅방</li>
      </Link>
      <Link href="/group">
        <li className="menu">단체 채팅방</li>
      </Link>
      <Link href="/make">
        <li className="menu">채팅방 만들기</li>
      </Link>
      <li className="menu">로그아웃</li>
    </ul>
  );
}
export default Navbar;
