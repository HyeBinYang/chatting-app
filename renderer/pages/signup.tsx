import Head from "next/head";
import React from "react";
import Form from "../components/Form";

interface Signup {
  id: string;
  password: string;
  passwordConfirm: string;
}

function Signup() {
  const signupForm: Signup = {
    id: "",
    password: "",
    passwordConfirm: "",
  };

  return (
    <div id="signup">
      <Head>
        <title>회원가입</title>
      </Head>
      <Form signupForm={signupForm} />
    </div>
  );
}

export default Signup;
