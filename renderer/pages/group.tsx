import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import RoomList from "../components/RoomList";

function group() {
  return (
    <React.Fragment>
      <Head>
        <title>단체 채팅방</title>
      </Head>
      <div>
        <Navbar />
        <RoomList />
      </div>
    </React.Fragment>
  );
}

export default group;
