import React from "react";

const LoginForm = () => {
  return (
    <form className="login-form">
      <input type="text" placeholder="이메일" />
      <input type="text" placeholder="비밀번호" />
      <button>로그인</button>
    </form>
  );
};

export default LoginForm;
