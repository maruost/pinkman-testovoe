import React from "react";
import s from "./ResultTextBox.module.scss";

function ResultTextBox({ ...props }) {
  return (
    <div className={s.wrapper}>
      <p className={s.section}>{props.label}</p>
      <p className={s.info}>{props.info}</p>
    </div>
  );
}

export default ResultTextBox;
