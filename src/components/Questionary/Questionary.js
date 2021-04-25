import React, { useState, useRef, useEffect } from "react";
import s from "./Questionary.module.scss";
import Slider from "../Slider/Slider";
import InfoBox from "../InfoBox/InfoBox";
import Button from "../Button/Button";
import FormValidator from "../FormValidator/FormValidator";
import Api from "../Api/Api";

function Questionary({ ...props }) {
  const [isUserEntity, setisUserEntity] = useState(false);
  const [inputValues, setInputValues] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [events, setEvents] = useState({});
  const [isInputBlocked, setIsInputBlocked] = useState(false);
  const { setErrorMessage, errors } = FormValidator();
  const { getEvents, sendRequest } = Api();

  useEffect(() => {
    setEvents({});
    getEvents()
      .then((data) => {
        console.log(data);
        setEvents(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUserType = (input) => {
    setisUserEntity(input);
    formRef.current.reset();
    setInputValues({});
  };

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValues);
    setIsInputBlocked(true);
    sendRequest(inputValues)
      .then((res) => {
        console.log(res);
        setIsInputBlocked(false);
      })
      .catch((err) => {
        setIsInputBlocked(false);
        console.log(err);
      });
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
      <Slider onHandleUserType={handleUserType} isUserEntity={isUserEntity} />
      <form ref={formRef} className={s.form} onSubmit={handleSubmit}>
        <div className={s.container}>
          <InfoBox
            title="Личная информация"
            type="user-info"
            isUserEntity={isUserEntity}
            onHandleInputChange={handleInputChange}
            errors={errors}
            inputValues={inputValues}
            isInputBlocked={isInputBlocked}
          />
          <span className={s.line} />
          <InfoBox
            title="Выберите дату мероприятия"
            type="event"
            isUserEntity={isUserEntity}
            onHandleInputChange={handleInputChange}
            errors={errors}
            inputValues={inputValues}
            events={events}
            isInputBlocked={isInputBlocked}
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
