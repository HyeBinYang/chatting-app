import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import UserList from "../components/UserList";

function users() {
  return (
    <React.Fragment>
      <Head>
        <title>유저 목록</title>
      </Head>
      <div>
        <Navbar />
        <UserList />
      </div>
    </React.Fragment>
  );
}

export default users;
