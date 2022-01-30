import React from "react";

const SignupForm = () => {
  return (
    <form className="auth-form">
      <input type="text" placeholder="이메일" />
      <input type="text" placeholder="이름" />
      <input type="password" placeholder="비밀번호" />
      <input type="password" placeholder="비밀번호 재입력" />
      <button>회원가입</button>
    </form>
  );
};

export default SignupForm;
