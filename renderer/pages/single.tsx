import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import RoomList from "../components/RoomList";

function single() {
  return (
    <React.Fragment>
      <Head>
        <title>채팅방 목록</title>
      </Head>
      <div>
        <Navbar />
        <RoomList />
      </div>
    </React.Fragment>
  );
}

export default single;
