import React, { useReducer } from "react";
import Head from "next/head";
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
