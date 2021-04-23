import React from "react";
import s from "./Button.module.scss";

function Button({ ...props }) {
  return <button className={s.button} {...props}></button>;
}

export default Button;
