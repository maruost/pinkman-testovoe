import React, { useState, useEffect } from "react";
import s from "./SelectRadio.module.scss";
import iconUp from "../../static/images/icons/input-arr-up.svg";
import iconDownInActive from "../../static/images/icons/input-arr-down-inactive.svg";
import iconDown from "../../static/images/icons/input-arr.svg";
import iconUpInActive from "../../static/images/icons/input-arr-up-inactive.svg";
import Preloader from "../Preloader/Preloader";

function SelectRadio({ ...props }) {
  const [value, setValue] = useState("");
  const [isListOpened, setIsListOpened] = useState(false);
  const eventsData = props.events.eventsDate;

  useEffect(() => {
    setValue("");
  }, [props.isUserEntity]);

  const getEventName = () => {
    if (props.inputValues[props.name]) {
      const eventObj = props.inputValues[props.name];
      const eventName = eventObj.label;
      return eventName;
    } else {
      return "";
    }
  };

  const handleChange = (e) => {
    props.onHandleInputChange(e.target, {
      [props.name]: e.target.id,
      label: e.target.dataset.label,
    });
    setValue(e.target.dataset.label);
    setIsListOpened(false);
  };

  const handleClick = () => {
    props.blocked ? setIsListOpened(false) : setIsListOpened(!isListOpened);
  };

  const renderOptions = (data) => {
    if (data) {
      const arr = data.map((input) => {
        return (
          <div className={s.wrapper}>
            <input
              type="radio"
              id={input.id}
              name={props.name}
              className={s.input}
              onChange={handleChange}
              data-label={input.label}
              value={getEventName()}
              required={props.required}
            />
            <label htmlFor={input.id} className={s.label}>
              {input.label}
            </label>
          </div>
        );
      });
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

  const changeFieldStyle = () => {
    const style = {
      fontSize: "",
      paddingTop: "",
      color: "",
    };
    if (value) {
      style.fontSize = "10px";
      style.paddingTop = "0px";
    } else {
      style.fontSize = "14px";
      style.paddingTop = "6px";
    }
    if (isListOpened) {
      style.color = "#AB81F1";
    } else {
      style.color = "#676C7A";
    }
    return style;
  };

  return (
    <div className={s.select}>
      <div
        className={s.field}
        onClick={handleClick}
        style={
          isListOpened ? { border: "1px solid #AB81F1" } : { border: "none" }
        }
      >
        <p className={s.title} style={changeFieldStyle()}>
          {props.label}
        </p>
        <p className={s.info}>{value}</p>
        <img
          className={s.icon}
          src={
            props.blocked
              ? isListOpened
                ? iconUpInActive
                : iconDownInActive
              : isListOpened
              ? iconUp
              : iconDown
          }
          alt="icon"
        />
      </div>
      <span className={s.error}>{props.errors[props.name]}</span>
      <div
        className={s.inputs}
        style={isListOpened ? { display: "block" } : { display: "none" }}
      >
        {renderOptions(eventsData)}
      </div>
    </div>
  );
}

export default SelectRadio;
