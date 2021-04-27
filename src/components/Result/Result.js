import React from "react";
import { useHistory } from "react-router-dom";
import s from "./Result.module.scss";
import { useData } from "../DataContext/DataContext";
import Button from "../Button/Button";
import ResultTextBox from "../ResultTextBox/ResultTextBox";

function Result() {
  const { data } = useData();
  const history = useHistory();
  console.log("контекст", data);

  const renderFieldsByStatus = (status) => {
    if (status) {
      return (
        <div className={s.mainInfo}>
          <ResultTextBox label="Название компании" info={data.cName} />
          <ResultTextBox label="Тип участника" info={"Юр. лицо"} />
          <ResultTextBox label="Номер телефона" info={data.phone} />
          <ResultTextBox label="Должность" info={data.pos} />
        </div>
      );
    } else {
      return (
        <div className={s.mainInfo}>
          <ResultTextBox label="ФИО" info={data.name} />
          <ResultTextBox label="Тип участника" info={"Физ. лицо"} />
          <ResultTextBox label="Номер телефона" info={data.phone} />
          <ResultTextBox label="Дата рождения" info={data.dob} />
        </div>
      );
    }
  };
  return (
    <div className={s.main}>
      <h3 className={s.subtitle}>Спасибо за заявку!</h3>
      <div className={s.box}>
        {renderFieldsByStatus(data.status)}
        <div className={s.wrapper}>
          <p className={s.section}>Опции</p>
          <p className={s.info}>{data.opt1.option}</p>
          <p className={s.info}>{data.opt2.option}</p>
          <p className={s.info}>{data.opt3.option}</p>
        </div>
      </div>
      <Button
        type="button"
        disabled={false}
        onClick={() => {
          history.push("/questionary");
        }}
      >
        Вернуться на главную
      </Button>
    </div>
  );
}

export default Result;
