import React from "react";
import Logo from "../components/auth/Logo";
import SignupForm from "../components/auth/signup/SignupForm";
import SignupButtons from "../components/auth/signup/SignupButtons";
import "../styles/auth.scss";

const Signup = () => {
  return (
    <div className="auth">
      <div className="auth-container">
        <Logo />
        <SignupForm />
        <SignupButtons />
      </div>
    </div>
  );
};

export default Signup;
