import React, { useState, useRef, useEffect } from "react";
import s from "./Questionary.module.scss";
import Slider from "../Slider/Slider";
import InfoBox from "../InfoBox/InfoBox";
import Button from "../Button/Button";
import FormValidator from "../FormValidator/FormValidator";
import Api from "../Api/Api";

function Questionary({ ...props }) {
  const [inputValues, setInputValues] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [events, setEvents] = useState({});
  const { setErrorMessage, errors } = FormValidator();
  const { getEvents } = Api();

  console.log(events);

  useEffect(() => {
    setEvents({});
    getEvents()
      .then((data) => {
        console.log(data);
        setEvents(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
    console.log(inputValues);
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
            inputValues={inputValues}
          />
          <span className={s.line} />
          <InfoBox
            title="Выберите дату мероприятия"
            type="event"
            isUserEntity={props.isUserEntity}
            onHandleInputChange={handleInputChange}
            errors={errors}
            inputValues={inputValues}
            events={events}
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
