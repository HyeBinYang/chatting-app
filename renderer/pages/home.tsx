import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import UserList from "../components/UserList";
import Main from "../components/Main";

function home() {
  return (
    <React.Fragment>
      <Head>
        <title>메인</title>
      </Head>
      <div>
        <Navbar />
        <Main />
      </div>
    </React.Fragment>
  );
}

export default home;
