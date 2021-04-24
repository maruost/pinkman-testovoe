import React, { useState } from "react";
import s from "./WelcomeBoard.module.scss";

function WeclomeBoard({ children }) {
  return (
    <div className={s.board}>
      <h1 className={s.title}>Coding Mega Event</h1>
      {children}
    </div>
  );
}

export default WeclomeBoard;
