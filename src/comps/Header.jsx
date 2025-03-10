import React from "react";
import classes from "../css-modules/Header.module.scss";
import btn_icon from "/icons/sparkles.svg";

const Header = () => {
  const handleButtonClick = () => {
    document
      .getElementById("plans")
      .scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.upperheader}>
        Практикум для бьюти-мастеров по привлечению клиентов
      </h2>

      <div className={classes.main}>
        <div className={classes.headings}>
          <span className={classes.badge}>Старт 20 марта</span>
          <h1 className={classes.header}>Бьюти экспедиция</h1>
          <h3 className={classes.underheader}>
            Мы отправляемся в мир тайн и загадок
          </h3>
          <h5 className={classes.desc}>7 уроков в записи + 6 закрытых тайн</h5>
        </div>
        <button onClick={handleButtonClick} className={classes.button}>
          <img src={btn_icon} alt="Sparkles" />
          Присоединиться
          <img src={btn_icon} alt="Sparkles" />
        </button>
      </div>
    </div>
  );
};

export default Header;
