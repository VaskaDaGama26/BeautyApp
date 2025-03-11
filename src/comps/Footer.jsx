import React from "react";
import classes from "../css-modules/Footer.module.scss";
import logo from "/icons/logoKV.png";

const Footer = () => {
  const linkDict = {
    oferta: { link: "#", text: "Публичная оферта" },
    politicsPD: { link: "#", text: "Политика обработки персональных данных" },
    approvalPD: { link: "#", text: "Согласие на обработку персональных данных" },
    approvalEmail: { link: "#", text: "Согласие на рассылку электронных сообщений" },
  }

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.docs}>
          <div className={classes.row}>
            <a href={linkDict.oferta.link}>{linkDict.oferta.text}</a>
            <a href={linkDict.politicsPD.link}>{linkDict.politicsPD.text}</a>
          </div>
          <div className={classes.row}>
            <a href={linkDict.approvalPD.link}>{linkDict.approvalPD.text}</a>
            <a href={linkDict.approvalEmail.link}>{linkDict.approvalEmail.text}</a>
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
