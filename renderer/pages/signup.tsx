import Head from "next/head";
import React from "react";
import SignupForm from "../components/SignupForm";

function Signup() {
  return (
    <div id="signup">
      <Head>
        <title>회원가입</title>
      </Head>
      <SignupForm />
    </div>
  );
}

export default Signup;
