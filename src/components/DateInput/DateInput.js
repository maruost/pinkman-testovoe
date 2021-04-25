import React, { useState, useEffect, useRef } from "react";
import s from "./DateInput.module.scss";
import calendarIcon from "../../static/images/icons/calendar.svg";

function DateInput({ ...props }) {
  const [dob, setDob] = useState("");
  const inputRef = useRef();
  const handleChange = (e) => {
    setDob(e.target.value);
    props.onHandleInputChange(e.target, e.target.value);
  };

  return (
    <div className={s.box}>
      <div className={s["input-box"]}>
        <input
          ref={inputRef}
          {...props}
          className={s.input}
          onChange={handleChange}
          id={props.name}
          value={dob}
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
