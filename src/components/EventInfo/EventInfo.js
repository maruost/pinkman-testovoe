import React from "react";
import s from "./EventInfo.module.scss";

function EventInfo({ children }) {
  return (
    <div className={s.main}>
      <h3 className={s.title}>Выберите дату мероприятия</h3>
      <div className={s.inputs}>{children}</div>
    </div>
  );
}

export default EventInfo;
