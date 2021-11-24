import React from "react";
import Link from "./Link";

interface Login {
  id: string;
  password: string;
}

interface Signup {
  id: string;
  password: string;
  passwordConfirm: string;
}

interface AuthFormProps {
  loginForm?: Login;
  signupForm?: Signup;
}

function Form({ loginForm, signupForm }: AuthFormProps) {
  return (
    <div id="form">
      {loginForm
        ? Object.keys(loginForm).map((request: string, index: number) => {
            return <input className="form__input" type="text" placeholder={request} />;
          })
        : Object.keys(signupForm).map((request: string, index: number) => {
            return <input className="form__input" type="text" placeholder={request} />;
          })}
      <button className="form__submit">{loginForm ? "로그인" : "회원가입"}</button>
      <Link className="form__link" href={loginForm ? "/signup" : "/login"}>
        {loginForm ? "회원가입하러 가기" : "로그인하러 가기"}
      </Link>
    </div>
  );
}

export default Form;
