import React from "react";
import Head from "next/head";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import Signup from "./signup";
import Login from "./login";

function Home() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleClick = () => setOpen(true);

  return (
    <React.Fragment>
      <Head>
        <title>채팅 앱</title>
      </Head>
      <div>
        <Login />
      </div>
    </React.Fragment>
  );
}

export default Home;
