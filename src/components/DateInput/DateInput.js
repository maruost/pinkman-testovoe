import React from "react";
import s from "./DateInput.module.scss";

function DateInput({ ...props }) {
  const handleChange = (e) => {
    props.onHandleInputChange(e.target, e.target.value);
  };

  return (
    <div className={s.box}>
      <div className={s["input-box"]}>
        <input
          name={props.name}
          type={props.type}
          required={props.required}
          disabled={props.disabled}
          className={s.input}
          onChange={handleChange}
          id={props.name}
          value={
            props.inputValues[props.name] ? props.inputValues[props.name] : ""
          }
        />
        <label htmlFor={props.name} className={s["label-input"]}>
          {props.label}
        </label>
      </div>
      <span className={s.error}>{props.errors[props.name]}</span>
    </div>
  );
}

export default DateInput;
