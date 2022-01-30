import React from "react";
import Logo from "../components/auth/Logo";
import SignupForm from "../components/auth/signup/SignupForm";
import SignupButtons from "../components/auth/signup/SignupButtons";

const Signup = () => {
  return (
    <div>
      <Logo />
      <SignupForm />
      <SignupButtons />
    </div>
  );
};

export default Signup;
