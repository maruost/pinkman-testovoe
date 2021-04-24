import React from "react";
import validator from "validator";
import { errorMessages } from "./errorMessages";

function FormValidator() {
  const [errors, setErrors] = React.useState({});

  function setErrorMessage(target, name) {
    if (target.validity !== undefined) {
      if (target.validity.valueMissing) {
        setErrors({ ...errors, [name]: errorMessages.empty });
        return;
      } else if (
        target.type === "tel" &&
        !validator.isMobilePhone(target.value, ["ru-RU"])
      ) {
        setErrors({ ...errors, [name]: errorMessages.wrongTelFormat });
        return;
      } else if (target.type === "email" && !validator.isEmail(target.value)) {
        setErrors({ ...errors, [name]: errorMessages.wrongEmail });
        return;
      } else if (target.validity.tooShort) {
        if (target.type === "password") {
          setErrors({ ...errors, [name]: errorMessages.shortPassword });
          return;
        }
        setErrors({ ...errors, [name]: errorMessages.tooShort });
        return;
      } else if (target.validity.valid) {
        setErrors({ ...errors, [name]: "" });
        return;
      } else {
        setErrors({ ...errors, [name]: target.validationMessage });
        return;
      }
    }
  }

  return { setErrorMessage, errors };
}

export default FormValidator;
