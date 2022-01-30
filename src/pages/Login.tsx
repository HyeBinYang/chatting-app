import React from "react";
import Logo from "../components/auth/Logo";
import LoginForm from "../components/auth/login/LoginForm";
import LoginButtons from "../components/auth/login/LoginButtons";
import "../styles/auth.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <Logo />
        <LoginForm />
        <LoginButtons />
      </div>
    </div>
  );
};

export default Login;
