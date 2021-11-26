import React, { useCallback, useEffect, useReducer } from "react";
import Head from "next/head";
import { auth } from "../services/firebase";
import Login from "./login";
import Users from "./users";

interface Authstate {
  isAuthenticated: boolean;
}

enum ActionKind {
  authenticate = "AUTHENTICATE",
  notAuthenticate = "NOT AUTHENTICATE",
}

interface AuthAction {
  type: ActionKind;
}

const authenticate: AuthAction = {
  type: ActionKind.authenticate,
};

const notAuthenticate: AuthAction = {
  type: ActionKind.notAuthenticate,
};

function reducer(state: Authstate, action: AuthAction) {
  switch (action.type) {
    case "AUTHENTICATE":
      return {
        ...state,
        isAuthenticated: true,
      };

    case "NOT AUTHENTICATE":
      return {
        ...state,
        isAuthenticated: false,
      };

    default:
      return state;
  }
}

const initialAuthState: Authstate = {
  isAuthenticated: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialAuthState);
  const { isAuthenticated } = state;

  const onAuthenticate = useCallback(() => {
    dispatch(authenticate);
  }, []);

  const onNotAuthenticate = useCallback(() => {
    dispatch(notAuthenticate);
  }, []);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      user ? onAuthenticate() : onNotAuthenticate();
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>채팅 앱</title>
      </Head>
      {isAuthenticated ? (
        <Users isAuthenticated={isAuthenticated} onNotAuthenticate={onNotAuthenticate} />
      ) : (
        <Login onAuthenticate={onAuthenticate} />
      )}
    </React.Fragment>
  );
}

export default App;
