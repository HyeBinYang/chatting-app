import React from "react";
import Link from "next/link";
import { logout } from "../helpers/auth";

interface Props {
  onNotAuthenticate: (props: void) => void;
}

function Navbar({ onNotAuthenticate }: Props) {
  const onHandleLogoutClick = async () => {
    await logout();
    onNotAuthenticate();
  };

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
      <li className="menu" onClick={onHandleLogoutClick}>
        로그아웃
      </li>
    </ul>
  );
}
export default Navbar;
