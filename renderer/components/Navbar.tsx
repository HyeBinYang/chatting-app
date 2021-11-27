import React, { useContext, useEffect, useCallback } from "react";
import Link from "next/link";
import { logout } from "../helpers/auth";
import { UserDispatch } from "../pages/_app";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const { state, dispatch } = useContext(UserDispatch);

  const onHandleLogoutClick = useCallback(async () => {
    await logout();
    dispatch({ type: "NOT AUTHENTICATE" });
    router.push("/login");
  }, []);

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
