import React, { useState } from "react";
import s from "./SelectRadio.module.scss";
import iconUp from "../../static/images/icons/input-arr-up.svg";
import iconDown from "../../static/images/icons/input-arr.svg";
import Preloader from "../Preloader/Preloader";

function SelectRadio({ ...props }) {
  const [value, setValue] = useState("");
  const [isListOpened, setIsListOpened] = useState(false);
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

  const handleChange = (e) => {
    props.onHandleInputChange(e.target, {
      [props.name]: e.target.id,
      label: e.target.dataset.label,
    });
    setValue(e.target.dataset.label);
    setIsListOpened(false);
  };

  const handleClick = () => {
    setIsListOpened(!isListOpened);
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

  return (
    <div className={s.select}>
      <div className={s.field} onClick={handleClick}>
        <p
          className={s.title}
          style={
            value
              ? { fontSize: "10px", paddingTop: "0px" }
              : { fontSize: "14px", paddingTop: "6px" }
          }
        >
          День мероприятия
        </p>
        <p className={s.info}>{value}</p>
        <img
          className={s.icon}
          src={isListOpened ? iconUp : iconDown}
          alt="icon"
        />
      </div>
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
