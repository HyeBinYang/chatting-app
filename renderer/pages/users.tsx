import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import UserList from "../components/UserList";

interface Props {
  isAuthenticated: boolean;
  onNotAuthenticate: (props: void) => void;
}

function users({ isAuthenticated, onNotAuthenticate }: Props) {
  return (
    <React.Fragment>
      <Head>
        <title>유저 목록</title>
      </Head>
      <Navbar onNotAuthenticate={onNotAuthenticate} />
      <UserList />
    </React.Fragment>
  );
}

export default users;
