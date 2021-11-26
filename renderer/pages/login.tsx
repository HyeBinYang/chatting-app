import Head from "next/head";
import React from "react";
import LoginForm from "../components/LoginForm";

interface Props {
  onAuthenticate: (props: void) => void;
}

function Login({ onAuthenticate }: Props) {
  return (
    <div id="login">
      <Head>
        <title>로그인</title>
      </Head>
      <LoginForm onAuthenticate={onAuthenticate} />
    </div>
  );
}

export default Login;
