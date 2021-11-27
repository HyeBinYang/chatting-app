import Router, { useRouter } from "next/router";
import React, { useCallback, useContext, useState } from "react";
import { login } from "../helpers/auth";
import Link from "./Link";
import { UserDispatch } from "../pages/_app";
import { auth } from "../services/firebase";

interface LoginForm {
  email: string;
  password: string;
}

function LoginForm() {
  const { state, dispatch } = useContext(UserDispatch);
  const router = useRouter();

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
          await auth().setPersistence(auth.Auth.Persistence.SESSION);
          auth().onAuthStateChanged((user) => {
            if (user) {
              router.push("/users");
              dispatch({ type: "AUTHENTICATE", payload: { email } });
            }
          });
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
