import React, { useRef } from "react";
import s from "./Slider.module.scss";

function Slider({ onHandleUserType, isUserEntity }) {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.checked = !inputRef.current.checked;
    onHandleUserType(inputRef.current.checked);
  };
  const handleChange = (e) => {
    onHandleUserType(e.target.checked);
  };
  return (
    <div
      className={isUserEntity ? s["main-checked"] : s.main}
      onClick={handleClick}
    >
      <input
        ref={inputRef}
        type="checkbox"
        name="slider"
        id="slider"
        className={s.input}
        onChange={handleChange}
      />
      <label className={s.label} htmlFor="slider"></label>
    </div>
  );
}

export default Slider;
