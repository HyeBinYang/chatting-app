import Head from "next/head";
import React from "react";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div id="login">
      <Head>
        <title>로그인</title>
      </Head>
      <LoginForm />
    </div>
  );
}

export default Login;
