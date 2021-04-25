import React, { useState, useEffect, useRef } from "react";
import s from "./Select.module.scss";
import arrUpIcon from "../../static/images/icons/input-arr-up.svg";
import arrIcon from "../../static/images/icons/input-arr.svg";
import Preloader from "../Preloader/Preloader";

function Select({ ...props }) {
  const [value, setValue] = useState("");
  const [id, setId] = useState(null);
  const [isOpened, setIsOpened] = useState(false);
  const inputRef = useRef();

  const handleSubmit = () => {
    props.onHandleInputChange(inputRef.current, id);
  };

  useEffect(() => {
    handleSubmit();
  }, [id]);

  useEffect(() => {
    setValue("");
    setId(null);
  }, [props.isUserEntity]);

  const handleClick = (e) => {
    const content = e.target.textContent;
    const id = e.target.id;
    setValue(content);
    setId(id);
  };

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
      return <Preloader />;
    }
  };

  const toggleList = () => {
    return props.blocked ? null : setIsOpened(!isOpened);
  };

  return (
    <div className={s.select} onClick={toggleList}>
      <input
        className={s.input}
        id={props.name}
        {...props}
        disabled={true}
        value={value}
        ref={inputRef}
      />
      <img className={s.icon} src={isOpened ? arrUpIcon : arrIcon} alt="icon" />
      <label
        htmlFor={props.name}
        className={s["label-input"]}
        style={
          value !== "" ? { fontSize: "10px", top: "4px" } : { fontSize: "14px" }
        }
      >
        {props.label}
      </label>
      <div
        className={s.labels}
        style={isOpened ? { display: "block" } : { display: "none" }}
      >
        {renderOptions(props.events.eventsDate)}
      </div>
    </div>
  );
}

export default Select;
