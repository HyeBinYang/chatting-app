import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import UserList from "../components/UserList";

function main() {
  return (
    <React.Fragment>
      <Head>
        <title>메인</title>
      </Head>
      <div>
        <Navbar />
        <UserList />
      </div>
    </React.Fragment>
  );
}

export default main;
