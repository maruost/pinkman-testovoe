import React, { useState, useEffect } from "react";
import s from "./Input.module.scss";
import {
  isPossibleNumber,
  parsePhoneNumberFromString,
} from "libphonenumber-js";

function Input({ ...props }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    props.onHandleInputChange(e.target, e.target.value);
  };

  const normalizePhoneNum = (value) => {
    const phone = parsePhoneNumberFromString(value.value);
    if (phone) {
      setValue(phone.formatInternational());
    } else {
      setValue(value.value);
    }
  };

  return (
    <div className={s.box}>
      <div className={s["input-box"]}>
        <input
          {...props}
          className={s.input}
          onChange={handleChange}
          id={props.name}
          onBlur={(e) => normalizePhoneNum(e.target)}
          value={value}
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
