import Link from "next/link";
import Router from "next/router";
import React, { useCallback, useState } from "react";
import { signup } from "../../helpers/auth";
import { database } from "../../services/firebase";

interface SignupForm {
  email: string;
  password: string;
  passwordConfirm: string;
}

function SignupForm() {
  const [form, setForm] = useState<SignupForm>({
    email: "",
    password: "",
    passwordConfirm: "",
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

      const { email, password, passwordConfirm } = form;

      if (email !== "" && password !== "" && passwordConfirm !== "" && password === passwordConfirm) {
        try {
          await signup(email, password);
          database.ref("Users").push({
            email,
          });
          Router.push("/login");
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
      <input
        className="form__input"
        type="password"
        placeholder="passwordConfirm"
        value={form.passwordConfirm}
        name="passwordConfirm"
        onChange={handleOnChange}
      />
      <button className="form__submit">회원가입</button>
      <Link href="/login">
        <a className="form__link">로그인하러 가기</a>
      </Link>
    </form>
  );
}

export default SignupForm;
