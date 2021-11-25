import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

function make() {
  return (
    <React.Fragment>
      <Head>
        <title>유저 목록</title>
      </Head>
      <div>
        <Navbar />
        <h1>채팅방 만들기</h1>
      </div>
    </React.Fragment>
  );
}

export default make;
