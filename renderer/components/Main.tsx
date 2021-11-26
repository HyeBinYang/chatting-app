import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import UserList from "./UserList";

function Main() {
  const router = useRouter();
  console.log(router);

  return <div></div>;
}

export default Main;
