const serverErrors = (code) => {
  switch (code) {
    case 500:
      return "Произошла ошибка на сервере. Пожалуйста, перезагрузите страницу";
    case 400:
      return "Ошибка. Пожалуйста, проверьте правильность заполнения полей";
    case 404:
      return "Не найдено";
    case 403:
      return "Ошибка доступа. Пожалуйста, авторизуйтесь";
    default:
      return "Ошибка. Пожалуйста, повторите попытку позже";
  }
};

export default serverErrors;
