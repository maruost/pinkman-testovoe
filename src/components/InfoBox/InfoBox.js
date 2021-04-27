import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";
import s from "./InfoBox.module.scss";
import Select from "../Select/Select";
import DateInput from "../DateInput/DateInput";
import SelectRadio from "../SelectRadio/SelectRadio";

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
          form={props.form}
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
          form={props.form}
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
          form={props.form}
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
          form={props.form}
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
          form={props.form}
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
          form={props.form}
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
        <SelectRadio
          label="День мероприятия"
          name="eventId"
          onHandleInputChange={onHandleInputChange}
          isUserEntity={props.isUserEntity}
          events={props.events}
          inputValues={props.inputValues}
          blocked={props.isInputBlocked}
          serverMsg={props.serverMsg}
          form={props.form}
          required
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
          form={props.form}
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
          form={props.form}
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
          form={props.form}
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
