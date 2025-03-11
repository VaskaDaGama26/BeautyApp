import React from "react";
import classes from "../css-modules/Footer.module.scss";
import logo from "/icons/logoKV.png";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.docs}>
          <div className={classes.row}>
            <a href="#">Публичная оферта</a>
            <a href="#">Политика обработки персональных данных</a>
          </div>
          <div className={classes.row}>
            <a href="#">Согласие на обработку персональных данных</a>
            <a href="#">Согласие на рассылку электронных сообщений</a>
          </div>
        </div>
        <h5 className={classes.alertMeta}>
          * - Instagram принадлежит компании Meta, признанной экстремистской
          организацией и запрещенной в РФ
        </h5>
      </div>
      <div className={classes.right}>
        <h3 className={classes.label}>Дизайн и разработка сайта: </h3>
        <a className={classes.logo__wrapper} href="https://t.me/vaskadagamaa26" target="_blank">
          <img
            src={logo}
            alt="Developer - Vasiliy Kirichenko"
            className={classes.logo}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
