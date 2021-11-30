import React from "react";
import Head from "next/head";
import Navbar from "../components/home/Navbar";
import UserList from "../components/home/UserList";

function users() {
  return (
    <React.Fragment>
      <Head>
        <title>유저 목록</title>
      </Head>
      <Navbar />
      <UserList />
    </React.Fragment>
  );
}

export default users;
