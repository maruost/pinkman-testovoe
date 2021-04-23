import React, { useState } from "react";
import s from "./Input.module.scss";

function Input({ onChange, inputValues, ...props }) {
  const [value, setValue] = useState("");
  const handleChange = (value) => {
    setValue(value);
    onChange({ [props.name]: value });
  };

  const renderByType = () => {
    if (type === "checkbox") {
      return (
        <>
          <input
            {...props}
            className={s.checkbox}
            onChange={(e) => handleChange(e.target.checked)}
            id={props.name}
            value={value}
          />
          <label htmlFor={props.name} className={s.label}>
            {props.label}
          </label>
          {/* <span className={s.error}>ssss</span> */}
        </>
      );
    } else {
      return (
        <>
          <div className={s["input-box"]}>
            <input
              {...props}
              className={s.input}
              id={props.name}
              onChange={(e) => handleChange(e.target.value)}
              value={value}
            />
            <label htmlFor={props.name} className={s["label-input"]}>
              {props.label}
            </label>
          </div>
          {/* <span className={s.error}>ssss</span> */}
        </>
      );
    }
  };

  const type = props.type;
  return <div className={s.box}>{renderByType()}</div>;
}

export default Input;
