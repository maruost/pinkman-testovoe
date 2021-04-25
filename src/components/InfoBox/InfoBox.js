import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";
import s from "./InfoBox.module.scss";
import Select from "../Select/Select";
import DateInput from "../DateInput/DateInput";

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
          isUserEntity={props.isUserEntity}
          disabled={props.isInputBlocked}
          inputValues={props.inputValues}
        />
        <DateInput
          name="dob"
          label="Дата рождения"
          type="date"
          onHandleInputChange={onHandleInputChange}
          errors={errors}
          isUserEntity={props.isUserEntity}
          required
          disabled={props.isInputBlocked}
          inputValues={props.inputValues}
        />
        <Input
          name="phone"
          label="Номер телефона"
          type="tel"
          onHandleInputChange={onHandleInputChange}
          errors={errors}
          isUserEntity={props.isUserEntity}
          required
          disabled={props.isInputBlocked}
          inputValues={props.inputValues}
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
          isUserEntity={props.isUserEntity}
          required
          disabled={props.isInputBlocked}
          inputValues={props.inputValues}
        />
        <Input
          name="pos"
          label="Ваша должность"
          type="text"
          onHandleInputChange={onHandleInputChange}
          errors={errors}
          isUserEntity={props.isUserEntity}
          required
          disabled={props.isInputBlocked}
          inputValues={props.inputValues}
        />
        <Input
          name="phone"
          label="Номер телефона"
          type="tel"
          onHandleInputChange={onHandleInputChange}
          errors={errors}
          isUserEntity={props.isUserEntity}
          required
          disabled={props.isInputBlocked}
          inputValues={props.inputValues}
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
        <Select
          label="Дата мероприятия"
          type="text"
          name="eventId"
          onHandleInputChange={onHandleInputChange}
          isUserEntity={props.isUserEntity}
          events={props.events}
          inputValues={props.inputValues}
          blocked={props.isInputBlocked}
        />
        <Checkbox
          name="opt1"
          label="Нужна парковка"
          type="checkbox"
          onHandleInputChange={onHandleInputChange}
          isUserEntity={props.isUserEntity}
          errors={errors}
          inputValues={props.inputValues}
          disabled={props.isInputBlocked}
        />
        <Checkbox
          name="opt2"
          label="Хочу получать раздаточный материал"
          type="checkbox"
          onHandleInputChange={onHandleInputChange}
          isUserEntity={props.isUserEntity}
          errors={errors}
          inputValues={props.inputValues}
          disabled={props.isInputBlocked}
        />
        <Checkbox
          name="opt3"
          label="Нужна помощь сопровождающего"
          type="checkbox"
          onHandleInputChange={onHandleInputChange}
          isUserEntity={props.isUserEntity}
          errors={errors}
          inputValues={props.inputValues}
          disabled={props.isInputBlocked}
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
