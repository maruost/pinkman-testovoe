import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";
import s from "./InfoBox.module.scss";

function InfoBox({ onHandleInputChange, errors, ...props }) {
  const setIndividualFields = () => {
    return (
      <>
        <Input
          name="name"
          label="ФИО"
          type="text"
          onHandleInputChange={onHandleInputChange}
          errors={errors}
          required
          minLength={2}
        />
        <Input
          name="dob"
          label="Дата рождения"
          type="date"
          onHandleInputChange={onHandleInputChange}
          errors={errors}
          required
        />
        <Input
          name="phone"
          label="Номер телефона"
          type="tel"
          onHandleInputChange={onHandleInputChange}
          errors={errors}
          required
        />
      </>
    );
  };

  const setEntityFields = () => {
    return (
      <>
        <Input
          name="cName"
          label="Название компании"
          type="text"
          onHandleInputChange={onHandleInputChange}
          errors={errors}
          required
        />
        <Input
          name="pos"
          label="Ваша должность"
          type="text"
          onHandleInputChange={onHandleInputChange}
          errors={errors}
          required
        />
        <Input
          name="phone"
          label="Номер телефона"
          type="tel"
          onHandleInputChange={onHandleInputChange}
          errors={errors}
          required
        />
      </>
    );
  };
  const setUserFields = () => {
    if (props.isUserEntity === true) {
      return setEntityFields();
    } else {
      return setIndividualFields();
    }
  };

  const setEventFields = () => {
    return (
      <>
        <Input
          name="eventDate"
          label="Дата мероприятия"
          type="date"
          onHandleInputChange={onHandleInputChange}
          errors={errors}
          required
        />
        <Checkbox
          name="opt1"
          label="Нужна парковка"
          type="checkbox"
          onHandleInputChange={onHandleInputChange}
          errors={errors}
        />
        <Checkbox
          name="opt2"
          label="Хочу получать раздаточный материал"
          type="checkbox"
          onHandleInputChange={onHandleInputChange}
          errors={errors}
        />
        <Checkbox
          name="opt3"
          label="Нужна помощь сопровождающего"
          type="checkbox"
          onHandleInputChange={onHandleInputChange}
          errors={errors}
        />
      </>
    );
  };
  return (
    <div className={s.main}>
      <h3 className={s.title}>{props.title}</h3>
      <div className={s.inputs}>
        {props.type === "user-info" ? setUserFields() : setEventFields()}
      </div>
    </div>
  );
}

export default InfoBox;
