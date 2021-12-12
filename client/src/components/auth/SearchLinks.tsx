import React from "react";
import { Link } from "react-router-dom";
import "../authForm.scss";

interface Link {
  title: string;
  path: string;
}

interface IProps {
  links: Link[];
}

function AuthLinks({ links }: IProps) {
  return (
    <div className="authForm__links">
      {links.map((link) => (
        <Link to={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default AuthLinks;
