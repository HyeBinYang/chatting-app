import React, { useState } from "react";
import "../authForm.scss";
import SearchLinks from "./SearchLinks";
import { useNavigate } from "react-router-dom";

interface LoginFormState {
  username: string;
  password: string;
}

function LoginForm() {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState<LoginFormState>({
    username: "",
    password: "",
  });

  const links = [
    {
      title: "회원가입",
      path: "signup",
    },
    {
      title: "계정 찾기",
      path: "/find/username",
    },
    {
      title: "비밀번호 재설정",
      path: "/input/username",
    },
  ];

  const onChangeLoginForm = (e: any) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const login = (e: any) => {
    e.preventDefault();
    navigate("/users");
  };

  return (
    <div className="authForm">
      <div className="authForm__logo">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
      </div>
      <form className="authForm__form" onSubmit={login}>
        <input
          onChange={onChangeLoginForm}
          className="form__input"
          type="text"
          value={loginForm.username}
          name="username"
          placeholder="아이디"
        />
        <input
          onChange={onChangeLoginForm}
          className="form__input"
          type="password"
          value={loginForm.password}
          name="password"
          placeholder="비밀번호"
        />
        <button className="form__btn active" type="submit">
          로그인
        </button>
      </form>
      <SearchLinks links={links} />
    </div>
  );
}

export default LoginForm;
