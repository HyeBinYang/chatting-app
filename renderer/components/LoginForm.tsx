import Router from "next/router";
import React, { useCallback, useState } from "react";
import { login } from "../helpers/auth";
import Link from "./Link";

interface LoginForm {
  email: string;
  password: string;
}

interface Props {
  onAuthenticate: (props: void) => void;
}

function LoginForm({ onAuthenticate }: Props) {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleOnChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    },
    [form]
  );

  const handleOnSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const { email, password } = form;

      if (email !== "" && password !== "") {
        try {
          await login(email, password);
          onAuthenticate();
        } catch (error) {
          console.log(error);
        }
      }
    },
    [form]
  );

  return (
    <form id="form" onSubmit={handleOnSubmit}>
      <input
        className="form__input"
        type="text"
        placeholder="email"
        value={form.email}
        name="email"
        onChange={handleOnChange}
      />
      <input
        className="form__input"
        type="password"
        placeholder="password"
        value={form.password}
        name="password"
        onChange={handleOnChange}
      />
      <button className="form__submit">로그인</button>
      <Link className="form__link" href="/signup">
        회원가입하러 가기
      </Link>
    </form>
  );
}

export default React.memo(LoginForm);
