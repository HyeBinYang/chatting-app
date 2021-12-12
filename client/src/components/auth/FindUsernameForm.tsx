import React from "react";
import "../authForm.scss";
import SearchLinks from "./SearchLinks";

function FindUsernameForm() {
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
      title: "비밀번호 재설정",
      path: "/input/username",
    },
  ];

  return (
    <div className="authForm">
      <div className="authForm__logo">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
      </div>
      <form className="authForm__form">
        <input className="form__input" type="text" placeholder="이메일" />
        <button className="form__btn active" type="submit">
          아이디 보내기
        </button>
      </form>
      <SearchLinks links={links} />
    </div>
  );
}

export default FindUsernameForm;
