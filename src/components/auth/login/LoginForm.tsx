import React from "react";

const LoginForm = () => {
  return (
    <form className="auth-form">
      <input type="text" placeholder="이메일" />
      <input type="password" placeholder="비밀번호" />
      <button>로그인</button>
    </form>
  );
};

export default LoginForm;
