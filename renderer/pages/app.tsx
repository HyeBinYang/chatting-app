import React, { useContext } from "react";
import Head from "next/head";
import { auth } from "../services/firebase";
import Login from "./login";
import Users from "./users";
import { UserDispatch } from "../pages/_app";

function App() {
  const { state, dispatch } = useContext(UserDispatch);

  return (
    <React.Fragment>
      <Head>
        <title>채팅 앱</title>
      </Head>
      {state.isAuthenticated ? <Users /> : <Login />}
    </React.Fragment>
  );
}

export default App;
