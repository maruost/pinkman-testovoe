import React, { useState, useEffect, useRef } from "react";
import s from "./Select.module.scss";
import arrUpIcon from "../../static/images/icons/input-arr-up.svg";
import arrIcon from "../../static/images/icons/input-arr.svg";
import Preloader from "../Preloader/Preloader";

function Select({ ...props }) {
  const [value, setValue] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const inputRef = useRef();

  const eventsData = props.events.eventsDate;

  const getEventName = () => {
    if (props.inputValues[props.name]) {
      const eventObj = props.inputValues[props.name];
      const eventName = eventObj.label;
      return eventName;
    } else {
      return "";
    }
  };

  const handleClick = (e) => {
    setValue(e.target.textContent);
    props.onHandleInputChange(inputRef.current, {
      [props.name]: e.target.id,
      label: e.target.textContent,
    });
    setIsOpened(!isOpened);
    inputRef.current.blur();
  };

  const renderOptions = (data) => {
    if (data) {
      const arr = data.map((opt) => (
        <label
          className={s.label}
          htmlFor={props.name}
          key={opt.id}
          id={opt.id}
          onClick={handleClick}
        >
          {opt.label}
        </label>
      ));
      return arr;
    } else {
      return (
        <div className={s.box}>
          {props.serverMsg !== "" ? (
            <p className={s.error}>{props.serverMsg}</p>
          ) : (
            <Preloader />
          )}
        </div>
      );
    }
  };

  const toggleList = () => {
    return props.blocked ? null : setIsOpened(!isOpened);
  };

  return (
    <div className={s.select}>
      <div className={s.box} onClick={toggleList}>
        <input
          ref={inputRef}
          className={s.input}
          {...props}
          name={props.name}
          id={props.name}
          value={getEventName()}
        />
        <img
          className={s.icon}
          src={isOpened ? arrUpIcon : arrIcon}
          alt="icon"
        />
        <label
          htmlFor={props.name}
          className={s["label-input"]}
          style={
            value !== ""
              ? { fontSize: "10px", top: "4px" }
              : { fontSize: "14px" }
          }
        >
          {props.label}
        </label>
      </div>
      <div
        className={s.labels}
        style={isOpened ? { display: "block" } : { display: "none" }}
      >
        {renderOptions(eventsData)}
      </div>
    </div>
  );
}

export default Select;
