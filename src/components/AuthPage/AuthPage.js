import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import s from "./AuthPage.module.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
import FormValidator from "../FormValidator/FormValidator";
import Api from "../Api/Api";
import PasswordInput from "../PasswordInput/PasswordInput";
import Preloader from "../Preloader/Preloader";
import serverError from "../constants/serverMessages";

function AuthPage({ ...props }) {
  const initialData = {
    username: "user@example.com",
    password: "user8952",
  };
  const formRef = useRef(null);
  const [inputValues, setInputValues] = useState(initialData);
  const [isValid, setIsValid] = useState(false);
  const { setErrorMessage, errors } = FormValidator();
  const history = useHistory();
  const { signin } = Api();
  const [serverMsg, setServerMsg] = useState({ data: "", request: "" });
  const [isInputBlocked, setIsInputBlocked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValues);
    setIsInputBlocked(true);
    signin(inputValues)
      .then((data) => {
        setIsInputBlocked(false);
        localStorage.setItem("token", data.token);
        props.handleLogin();
        history.push("/questionary");
      })
      .catch((err) => {
        setIsInputBlocked(false);
        const error = serverError(err);
        setServerMsg({ ...serverMsg, entry: error });
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
      <h3 className={s.subtitle}>Добро пожаловать</h3>
      <form ref={formRef} className={s.form} onSubmit={handleSubmit}>
        <div className={s.container}>
          <Input
            errors={errors}
            type="email"
            name="username"
            label="E-mail"
            onHandleInputChange={handleInputChange}
            required
            blocked={isInputBlocked}
            inputValues={inputValues}
          />
          <PasswordInput
            type="password"
            name="password"
            label="Пароль"
            onHandleInputChange={handleInputChange}
            required
            blocked={isInputBlocked}
            inputValues={inputValues}
          />
        </div>
        <Button type="submit" isValid={isValid} isBlocked={isInputBlocked}>
          {isInputBlocked ? "Заходим..." : "Войти"}
        </Button>
        {isInputBlocked ? (
          <Preloader />
        ) : (
          <p className={s.error}>{serverMsg.entry}</p>
        )}
      </form>
    </div>
  );
}

export default AuthPage;
