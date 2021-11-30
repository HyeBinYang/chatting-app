import React from "react";
import Head from "next/head";
import Navbar from "../components/home/Navbar";
import RoomForm from "../components/home/RoomForm";

function make() {
  return (
    <React.Fragment>
      <Head>
        <title>방 만들기</title>
      </Head>
      <div>
        <Navbar />
        <RoomForm />
      </div>
    </React.Fragment>
  );
}

export default make;
