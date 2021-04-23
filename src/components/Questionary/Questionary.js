import React, { useState } from "react";
import s from "./Questionary.module.scss";
import Slider from "../Slider/Slider";
import InfoBox from "../InfoBox/InfoBox";
import Button from "../Button/Button";

function Questionary({ ...props }) {
  return (
    <div className={s.main}>
      <h3 className={s.subtitle}>Заполните анкету участника</h3>
      <form className={s.form}>
        <Slider
          onHandleUserType={props.onHandleUserType}
          isUserEntity={props.isUserEntity}
        />
        <div className={s.container}>
          <InfoBox
            title="Личная информация"
            type="user-info"
            isUserEntity={props.isUserEntity}
          />
          <span className={s.line} />
          <InfoBox
            title="Выберите дату мероприятия"
            type="event"
            isUserEntity={props.isUserEntity}
          />
        </div>
        <Button type="submit">Отправить заявку</Button>
      </form>
    </div>
  );
}

export default Questionary;
