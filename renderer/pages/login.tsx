import Head from "next/head";
import React from "react";
import Form from "../components/Form";

interface LoginForm {
  id: string;
  password: string;
}

function Login() {
  const loginForm: LoginForm = {
    id: "",
    password: "",
  };

  return (
    <div id="login">
      <Head>
        <title>로그인</title>
      </Head>
      <Form loginForm={loginForm} />
    </div>
  );
}

export default Login;
