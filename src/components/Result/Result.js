import React from "react";
import { useHistory } from "react-router-dom";
import s from "./Result.module.scss";
import { useData } from "../DataContext/DataContext";
import Button from "../Button/Button";

function Result() {
  const { data } = useData();
  const history = useHistory();
  console.log("контекст", data);
  return (
    <div className={s.main}>
      <h3 className={s.subtitle}>Спасибо за заявку!</h3>
      <div className={s.box}>
        <div className={s.wrapper}>
          <p className={s.section}>ФИО</p>
          <p className={s.info}>{data.name}</p>
        </div>
        <div className={s.wrapper}>
          <p className={s.section}>Тип участника</p>
          <p className={s.info}>{data.status ? "Юр. лицо" : "Физ. лицо"}</p>
        </div>
        <div className={s.wrapper}>
          <p className={s.section}>Номер телефона</p>
          <p className={s.info}>+7988555664</p>
        </div>
        <div className={s.wrapper}>
          <p className={s.section}>Дата рождения</p>
          <p className={s.info}>{data.dob}</p>
        </div>
        <div className={s.wrapper}>
          <p className={s.section}>Опции</p>
          <p className={s.info}>{data.opt1.opt1 ? data.opt1.option : ""}</p>
          <p className={s.info}>{data.opt2.opt2 ? data.opt2.option : ""}</p>
          <p className={s.info}>{data.opt3.opt3 ? data.opt3.option : ""}</p>
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
