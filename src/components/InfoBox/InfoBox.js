import React, { useState } from "react";
import Input from "../Input/Input";
import s from "./InfoBox.module.scss";

function InfoBox({ ...props }) {
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (value) => {
    setInputValues({
      ...inputValues,
      ...value,
    });
    console.log(inputValues);
  };

  const setIndividualFields = () => {
    return (
      <>
        <Input
          name="initials"
          label="ФИО"
          type="text"
          onChange={handleInputChange}
          inputValues={inputValues}
        />
        <Input
          name="birthday"
          label="Дата рождения"
          type="date"
          onChange={handleInputChange}
          inputValues={inputValues}
        />
        <Input
          name="telNum"
          label="Номер телефона"
          type="phone"
          onChange={handleInputChange}
          inputValues={inputValues}
        />
      </>
    );
  };

  const setEntityFields = () => {
    return (
      <>
        <Input
          name="company"
          label="Название компании"
          type="text"
          onChange={handleInputChange}
          inputValues={inputValues}
        />
        <Input
          name="job"
          label="Ваша должность"
          type="text"
          onChange={handleInputChange}
          inputValues={inputValues}
        />
        <Input
          name="telNum"
          label="Номер телефона"
          type="phone"
          onChange={handleInputChange}
          inputValues={inputValues}
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
          onChange={handleInputChange}
          inputValues={inputValues}
        />
        <Input
          name="parking"
          label="Нужна парковка"
          type="checkbox"
          onChange={handleInputChange}
          inputValues={inputValues}
        />
        <Input
          name="handout"
          label="Хочу получать раздаточный материал"
          type="checkbox"
          onChange={handleInputChange}
          inputValues={inputValues}
        />
        <Input
          name="maintainer"
          label="Нужна помощь сопровождающего"
          type="checkbox"
          onChange={handleInputChange}
          inputValues={inputValues}
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
