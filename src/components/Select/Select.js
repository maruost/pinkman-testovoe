import React, { useState, useEffect, useRef } from "react";
import s from "./Select.module.scss";

function Select({ ...props }) {
  const [value, setValue] = useState("");
  const [id, setId] = useState("");
  const [events, setEvents] = useState({});
  const inputRef = useRef();
  const handleClick = (e) => {
    const content = e.target.textContent;
    const id = e.target.id;
    setValue(content);
    setId(id);
  };
  useEffect(() => {
    props.onHandleInputChange(inputRef.current, id);
  }, [id]);

  const renderOptions = (data) => {
    if (data) {
      const arr = data.map((opt) => (
        <label
          className={s.label}
          htmlFor={props.name}
          id={opt.id}
          onClick={handleClick}
        >
          {opt.label}
        </label>
      ));
      return arr;
    } else {
      return "loading...";
    }
  };

  return (
    <div className={s.select}>
      <input
        className={s.input}
        id={props.name}
        {...props}
        readOnly={true}
        value={value}
        ref={inputRef}
      />
      <label htmlFor={props.name} className={s["label-input"]}>
        {props.label}
      </label>
      <div className={s.labels}>{renderOptions(props.events.eventsDate)}</div>
    </div>
  );
}

export default Select;
