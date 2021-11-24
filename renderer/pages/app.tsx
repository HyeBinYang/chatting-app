import React from "react";
import Head from "next/head";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import Signup from "./signup";
import Login from "./login";
import Home from "./home";

function App() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleClick = () => setOpen(true);

  return (
    <React.Fragment>
      <Head>
        <title>채팅 앱</title>
      </Head>
      <div>
        <Home />
      </div>
    </React.Fragment>
  );
}

export default App;
