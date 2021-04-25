import React from "react";
import s from "./Button.module.scss";

function Button({ ...props }) {
  return (
    <button
      className={
        props.isValid && !props.isBlocked
          ? s.button
          : `${s.button} ${s.inactive}`
      }
      disabled={props.isValid && !props.isBlocked ? false : true}
      {...props}
    ></button>
  );
}

export default Button;
