import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import s from "./AuthPage.module.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
import FormValidator from "../FormValidator/FormValidator";
import Api from "../Api/Api";

function AuthPage({ ...props }) {
  const formRef = useRef(null);
  const [inputValues, setInputValues] = useState({});
  const [isValid, setIsValid] = useState(false);
  const { setErrorMessage, errors } = FormValidator();
  const history = useHistory();
  const { signin } = Api();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValues);
    signin(inputValues)
      .then((data) => {
        localStorage.setItem("token", data.token);
        props.handleLogin();
        history.push("/questionary");
      })
      .catch((err) => console.log(err));
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
          />
          <Input
            errors={errors}
            type="password"
            name="password"
            label="Пароль"
            onHandleInputChange={handleInputChange}
            required
            minLength={8}
          />
        </div>
        <Button type="submit" isValid={isValid}>
          Отправить заявку
        </Button>
      </form>
    </div>
  );
}

export default AuthPage;
