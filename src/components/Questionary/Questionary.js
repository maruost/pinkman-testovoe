import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import s from "./Questionary.module.scss";
import Slider from "../Slider/Slider";
import InfoBox from "../InfoBox/InfoBox";
import Button from "../Button/Button";
import FormValidator from "../FormValidator/FormValidator";
import Api from "../Api/Api";
import Preloader from "../Preloader/Preloader";
import serverError from "../constants/serverMessages";
import { useData } from "../DataContext/DataContext";
import {
  initialDataUser,
  initialDataEntity,
  parseDataToSend,
} from "./parseDataUtils";

function Questionary({ ...props }) {
  const [isUserEntity, setisUserEntity] = useState(false);
  const [inputValues, setInputValues] = useState(
    isUserEntity ? initialDataEntity : initialDataUser
  );
  const [isValid, setIsValid] = useState(false);
  const [events, setEvents] = useState({});
  const [isInputBlocked, setIsInputBlocked] = useState(false);
  const {
    setErrorMessage,
    errors,
    isFormValid,
    checkFormValidity,
  } = FormValidator();
  const [serverMsg, setServerMsg] = useState({ data: "", request: "" });
  const { getEvents, sendRequest } = Api();
  const { setValues } = useData();
  const formRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    setEvents({});
    getEvents()
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => {
        const error = serverError(err);
        setServerMsg({ ...serverMsg, data: error });
        if (err === 403) {
          localStorage.removeItem("token");
          history.push("/login");
        }
      });
  }, []);

  const handleUserType = (input) => {
    setisUserEntity(input);
    formRef.current.reset();
    setInputValues(isUserEntity ? initialDataEntity : initialDataUser);
    console.log(inputValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsInputBlocked(true);
    const reqData = parseDataToSend(inputValues, isUserEntity);
    // console.log(reqData, "datatosend");
    sendRequest(reqData)
      .then((res) => {
        console.log(res);
        setIsInputBlocked(false);
        setValues({ ...inputValues, status: isUserEntity });
        history.push("/result");
      })
      .catch((err) => {
        setIsInputBlocked(false);
        const error = serverError(err);
        setServerMsg({ ...serverMsg, request: error });
        if (err === 403) {
          localStorage.removeItem("token");
          history.push("/login");
        }
      });
  };

  const handleInputChange = (target, value) => {
    setInputValues({
      ...inputValues,
      [target.name]: value,
    });
    setErrorMessage(target, target.name);
    const validation = checkFormValidity(formRef.current, isFormValid);
    setIsValid(validation);
  };

  return (
    <div className={s.main}>
      <h3 className={s.subtitle}>Заполните анкету участника</h3>
      <Slider onHandleUserType={handleUserType} isUserEntity={isUserEntity} />
      <form
        ref={formRef}
        id="questions"
        className={s.form}
        onSubmit={handleSubmit}
      >
        <div className={s.container}>
          <InfoBox
            title="Личная информация"
            type="user-info"
            isUserEntity={isUserEntity}
            onHandleInputChange={handleInputChange}
            errors={errors}
            inputValues={inputValues}
            isInputBlocked={isInputBlocked}
            form="questions"
          />
          <InfoBox
            title="Выберите дату мероприятия"
            type="event"
            isUserEntity={isUserEntity}
            onHandleInputChange={handleInputChange}
            errors={errors}
            inputValues={inputValues}
            events={events}
            isInputBlocked={isInputBlocked}
            serverMsg={serverMsg.data}
            form="questions"
          />
        </div>
        <Button type="submit" isValid={isValid} isBlocked={isInputBlocked}>
          {isInputBlocked ? "Идёт отправка..." : "Отправить заявку"}
        </Button>
        {isInputBlocked ? (
          <Preloader />
        ) : (
          <p className={s.error}>{serverMsg.request}</p>
        )}
      </form>
    </div>
  );
}

export default Questionary;
