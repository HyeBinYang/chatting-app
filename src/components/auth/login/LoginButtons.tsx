import React from "react";
import { Link } from "react-router-dom";

const LoginButtons = () => {
  return (
    <div className="auth-link">
      <Link to="/signup">회원가입 하러 가기</Link>
    </div>
  );
};

export default LoginButtons;
