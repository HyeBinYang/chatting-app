import React from "react";
import { Link } from "react-router-dom";

const SignupButtons = () => {
  return (
    <div className="auth-link">
      <Link to="/login">로그인 하러 가기</Link>
    </div>
  );
};

export default SignupButtons;
