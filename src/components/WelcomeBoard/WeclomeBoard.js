import React, { useState } from "react";
import s from "./WelcomeBoard.module.scss";
import Questionary from "../Questionary/Questionary";

function WeclomeBoard() {
  const [isUserEntity, setisUserEntity] = useState(false);

  const handleUserType = (input) => {
    setisUserEntity(input);
  };

  return (
    <div className={s.board}>
      <h1 className={s.title}>Coding Mega Event</h1>
      <Questionary
        onHandleUserType={handleUserType}
        isUserEntity={isUserEntity}
      />
    </div>
  );
}

export default WeclomeBoard;
