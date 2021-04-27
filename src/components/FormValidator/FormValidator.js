import { useState } from "react";
import validator from "validator";
import { errorMessages } from "../constants/errorMessages";

function FormValidator() {
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState({});

  function setErrorMessage(target, name) {
    if (target.validity !== undefined) {
      if (target.validity.valueMissing) {
        setErrors({ ...errors, [name]: errorMessages.empty });
        setIsFormValid({ ...isFormValid, [name]: false });
        return;
      } else if (target.type === "email" && !validator.isEmail(target.value)) {
        setErrors({ ...errors, [name]: errorMessages.wrongEmail });
        setIsFormValid({ ...isFormValid, [name]: false });
        return;
      } else if (target.validity.tooShort) {
        if (target.type === "password") {
          setErrors({ ...errors, [name]: errorMessages.shortPassword });
          setIsFormValid({ ...isFormValid, [name]: false });
          return;
        } else {
          setErrors({ ...errors, [name]: errorMessages.tooShort });
          setIsFormValid({ ...isFormValid, [name]: false });
          return;
        }
      } else if (target.validity.patternMismatch) {
        if (target.type === "tel") {
          setErrors({ ...errors, [name]: errorMessages.wrongTelFormat });
          setIsFormValid({ ...isFormValid, [name]: false });
          return;
        }
      } else if (target.validity.valid) {
        setErrors({ ...errors, [name]: "" });
        setIsFormValid({ ...isFormValid, [name]: true });
        return;
      } else {
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsFormValid({ ...isFormValid, [name]: false });
        return;
      }
    }
  }

  function checkObjProps(obj) {
    const values = Object.values(obj);
    return values.find((item) => item === false);
  }

  function checkFormValidity(form, inputsValidation) {
    const validity = checkObjProps(inputsValidation);
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
