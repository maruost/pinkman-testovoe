import React from "react";
import s from "./Button.module.scss";

function Button({ ...props }) {
  return (
    <button
      className={props.isValid ? s.button : `${s.button} ${s.inactive}`}
      disabled={props.isValid ? false : true}
      {...props}
    ></button>
  );
}

export default Button;
