import React, { useState, useRef } from "react";
import s from "./Questionary.module.scss";
import Slider from "../Slider/Slider";
import InfoBox from "../InfoBox/InfoBox";
import Button from "../Button/Button";
import FormValidator from "../FormValidator/FormValidator";

function Questionary({ ...props }) {
  const [inputValues, setInputValues] = useState({});
  const [isValid, setIsValid] = useState(false);
  const { setErrorMessage, errors } = FormValidator();

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isValid);
  };

  const handleInputChange = (target, value) => {
    setInputValues({
      ...inputValues,
      [target.name]: value,
    });
    setErrorMessage(target, target.name);
    setIsValid(formRef.current.checkValidity());
  };

  return (
    <div className={s.main}>
      <h3 className={s.subtitle}>Заполните анкету участника</h3>
      <form ref={formRef} className={s.form} onSubmit={handleSubmit}>
        <Slider
          onHandleUserType={props.onHandleUserType}
          isUserEntity={props.isUserEntity}
        />
        <div className={s.container}>
          <InfoBox
            title="Личная информация"
            type="user-info"
            isUserEntity={props.isUserEntity}
            onHandleInputChange={handleInputChange}
            errors={errors}
          />
          <span className={s.line} />
          <InfoBox
            title="Выберите дату мероприятия"
            type="event"
            isUserEntity={props.isUserEntity}
            onHandleInputChange={handleInputChange}
            errors={errors}
          />
        </div>
        <Button type="submit" isValid={isValid}>
          Отправить заявку
        </Button>
      </form>
    </div>
  );
}

export default Questionary;
