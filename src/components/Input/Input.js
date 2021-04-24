import React, { useState, useEffect } from "react";
import s from "./Input.module.scss";

function Input({ ...props }) {
  const handleChange = (e) => {
    props.onHandleInputChange(e.target, e.target.value);
  };

  return (
    <div className={s.box}>
      <div className={s["input-box"]}>
        <input
          {...props}
          className={s.input}
          onChange={handleChange}
          id={props.name}
        />
        <label htmlFor={props.name} className={s["label-input"]}>
          {props.label}
        </label>
      </div>
      <span className={s.error}>{props.errors[props.name]}</span>
    </div>
  );
}

export default Input;
