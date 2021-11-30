import React, { useEffect, useReducer } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

// CSS
import "../styles/common.css";
import "../styles/auth.css";
import "../styles/navbar.css";
import "../styles/userlist.css";
import "../styles/form.css";
import "../styles/user.css";
import "../styles/roominfo.css";
import "../styles/roomlist.css";
import "../styles/roomform.css";
import "../styles/roomheader.css";
import "../styles/roommain.css";
import "../styles/roommembers.css";
import "../styles/roommember.css";
import "../styles/messages.css";
import "../styles/message.css";
import "../styles/insertmessage.css";
import { auth } from "../services/firebase";

interface IState {
  isAuthenticated: boolean;
  email: string;
}

const initialState: IState = {
  isAuthenticated: false,
  email: "",
};

function reducer(state: IState, action) {
  switch (action.type) {
    case "AUTHENTICATE":
      return {
        ...state,
        isAuthenticated: true,
        email: action.payload.email,
      };
    case "NOT AUTHENTICATE":
      return {
        ...state,
        isAuthenticated: false,
        email: "",
      };
    default:
      return state;
  }
}

export const UserDispatch = React.createContext(null);

export default function (props: AppProps) {
  const { Component, pageProps } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: "AUTHENTICATE", payload: { email: user.email } });
      }
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <UserDispatch.Provider value={{ state, dispatch }}>
        <Component {...pageProps} />
      </UserDispatch.Provider>
    </React.Fragment>
  );
}
