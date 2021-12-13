import React from "react";
import SearchLinks from "./SearchLinks";

function ResetPasswordForm() {
  const links = [
    {
      title: "로그인",
      path: "/",
    },
    {
      title: "회원가입",
      path: "/signup",
    },
    {
      title: "계정 찾기",
      path: "/find/username",
    },
  ];

  return (
    <div className="authForm">
      <div className="authForm__logo">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
      </div>
      <form className="authForm__form">
        <input className="form__input" type="password" placeholder="새로운 비밀번호" />
        <input className="form__input" type="password" placeholder="비밀번호 재입력" />
        <button className="form__btn active" type="submit">
          비밀번호 재설정
        </button>
      </form>
      <SearchLinks links={links} />
    </div>
  );
}

export default ResetPasswordForm;
