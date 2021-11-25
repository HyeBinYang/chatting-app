import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

function group() {
  return (
    <React.Fragment>
      <Head>
        <title>단체 채팅방</title>
      </Head>
      <div>
        <Navbar />
        <h1>Group</h1>
      </div>
    </React.Fragment>
  );
}

export default group;
