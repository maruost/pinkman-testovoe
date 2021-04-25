import React from "react";
import s from "./Preloader.module.scss";

function Preloader() {
  return (
    <div className={s.preloader}>
      <div className={s.icon}></div>
    </div>
  );
}

export default Preloader;
