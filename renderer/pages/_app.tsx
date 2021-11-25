import React from "react";
import Head from "next/head";
import { theme } from "../lib/theme";
import type { AppProps } from "next/app";

// CSS
import "../styles/common.css";
import "../styles/auth.css";
import "../styles/Form.css";
import "../styles/navbar.css";
import "../styles/UserList.css";
import "../styles/User.css";
import "../styles/RoomInfo.css";
import "../styles/RoomList.css";
import "../styles/RoomForm.css";

export default function (props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
