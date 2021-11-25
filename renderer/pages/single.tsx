import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

function single() {
  return (
    <React.Fragment>
      <Head>
        <title>1 대 1 채팅방</title>
      </Head>
      <div>
        <Navbar />
        <h1>1 대 1 채팅방</h1>
      </div>
    </React.Fragment>
  );
}

export default single;
