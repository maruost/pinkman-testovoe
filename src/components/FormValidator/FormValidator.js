import { useState } from "react";
import validator from "validator";
import { errorMessages } from "../constants/errorMessages";

function FormValidator() {
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState({});

  function setErrorMessage(target, value, name) {
    console.log(value);
    if (target.validity !== undefined) {
      if (target.required && value === "") {
        console.log("miss");
        setErrors({ ...errors, [name]: errorMessages.empty });
        setIsFormValid({ ...isFormValid, [name]: false });
        return;
      } else if (target.type === "email" && !validator.isEmail(value)) {
        setErrors({ ...errors, [name]: errorMessages.wrongEmail });
        setIsFormValid({ ...isFormValid, [name]: false });
        return;
      } else if (target.minlength && target.minlength > value.lenth) {
        if (target.type === "password") {
          setErrors({ ...errors, [name]: errorMessages.shortPassword });
          setIsFormValid({ ...isFormValid, [name]: false });
          return;
        }
        setErrors({ ...errors, [name]: errorMessages.tooShort });
        setIsFormValid({ ...isFormValid, [name]: false });
        return;
      } else {
        setErrors({ ...errors, [name]: "" });
        setIsFormValid({ ...isFormValid, [name]: true });
        return;
      }
    }
  }

  // function checkInputValidity(target, name) {
  //   if (!target.validity.valid) {
  //     setIsFormValid({ ...isFormValid, [name]: false });
  //     return;
  //   } else if (target.type === "email" && !validator.isEmail(target.value)) {
  //     setIsFormValid({ ...isFormValid, [name]: false });
  //     return;
  //   } else if (
  //     target.type === "tel" &&
  //     !validator.isMobilePhone(target.value, ["ru-RU"])
  //   ) {
  //     setIsFormValid({ ...isFormValid, [name]: false });
  //     return;
  //   } else {
  //     setIsFormValid({ ...isFormValid, [name]: true });
  //     return;
  //   }
  // }

  function checkObjProps(obj) {
    const values = Object.values(obj);
    // console.log(values);
    return values.find((item) => item === false);
  }

  function checkFormValidity(form, inputsValidation) {
    const validity = checkObjProps(inputsValidation);
    // console.log("val", validity);
    // console.log("form", form.checkValidity());
    if (form.checkValidity() && validity === undefined) {
      return true;
    } else {
      return false;
    }
  }
  return {
    setErrorMessage,
    errors,
    checkFormValidity,
    isFormValid,
  };
}

export default FormValidator;
