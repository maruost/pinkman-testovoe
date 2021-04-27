import React from "react";
import s from "./Checkbox.module.scss";

function Checkbox({ ...props }) {
  const handleChange = (e) => {
    props.onHandleInputChange(e.target, {
      [props.name]: Number(e.target.checked),
      option: props.label,
    });
  };

  return (
    <div className={s.box}>
      <input
        {...props}
        className={s.checkbox}
        onChange={handleChange}
        id={props.name}
        checked={
          props.inputValues[props.name]
            ? props.inputValues[props.name][props.name]
            : 0
        }
      />
      <label htmlFor={props.name} className={s.label}>
        {props.label}
      </label>
      <span className={s.error}>{props.errors[props.name]}</span>
    </div>
  );
}

export default Checkbox;
