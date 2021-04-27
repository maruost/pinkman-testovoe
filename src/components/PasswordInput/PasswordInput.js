import React, { useState } from "react";
import s from "./PasswordInput.module.scss";
import eyeActive from "../../static/images/icons/eye-active.svg";
import eyeInActive from "../../static/images/icons/eye-inactive.svg";
import eyeClosed from "../../static/images/icons/eye-closed.svg";

function PasswordInput({ ...props }) {
  const [isShown, setIsShown] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [icon, setIcon] = useState(eyeInActive);
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const toggleIcon = () => {
    if (isEmpty) {
      console.log("empty");
      setIcon(eyeInActive);
    } else if (isShown) {
      console.log("shown");
      setIcon(eyeClosed);
    } else {
      console.log("unshown");
      setIcon(eyeActive);
    }
  };

  const handleChange = (e) => {
    e.target.value === "" ? setIsEmpty(true) : setIsEmpty(false);
    toggleIcon();
    props.onHandleInputChange(e.target, e.target.value);
    setValue(e.target.value);
  };

  const showPassword = () => {
    if (isShown) {
      setIsShown(false);
      setIcon(eyeActive);
    } else {
      setIsShown(true);
      setIcon(eyeClosed);
    }
  };

  const changeFieldStyle = () => {
    const style = {
      fontSize: "",
      top: "",
      color: "",
    };
    if (value) {
      style.fontSize = "10px";
      style.top = "4px";
    } else {
      style.fontSize = "14px";
      style.top = "11px";
    }
    if (isFocused) {
      style.color = "#AB81F1";
      style.fontSize = "10px";
      style.top = "4px";
    } else {
      style.color = "#676C7A";
    }
    return style;
  };

  return (
    <div className={s.box}>
      <div className={s["input-box"]}>
        <input
          {...props}
          type={isShown ? "text" : "password"}
          className={s.input}
          onChange={handleChange}
          id={props.name}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            setIsShown(false);
          }}
        />
        <img
          className={s.icon}
          src={isEmpty ? eyeInActive : icon}
          alt="eye-icon"
          onClick={showPassword}
        />
        <label
          htmlFor={props.name}
          className={s["label-input"]}
          style={changeFieldStyle()}
        >
          {props.label}
        </label>
      </div>
    </div>
  );
}

export default PasswordInput;
