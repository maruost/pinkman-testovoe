import React, { useState } from "react";
import s from "./Checkbox.module.scss";

function Checkbox({ ...props }) {
  const handleChange = (e) => {
    props.onHandleInputChange(e.target, Number(e.target.checked));
  };
  return (
    <div className={s.box}>
      <input
        {...props}
        className={s.checkbox}
        onChange={handleChange}
        id={props.name}
      />
      <label htmlFor={props.name} className={s.label}>
        {props.label}
      </label>
      <span className={s.error}>{props.errors[props.name]}</span>
    </div>
  );
}

export default Checkbox;
