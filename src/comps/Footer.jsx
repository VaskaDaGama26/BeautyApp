import React from "react";
import classes from "../css-modules/Footer.module.scss";
import logo from "/icons/logoKV.png";

const Footer = () => {
  const linkDict = {
    oferta: { link: "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2F7%2BQAhPNaSrNKMy56rVLeQvDTdmakrNYSjbyvcriSFItuyY%2BpQM5elJ7TsUIHfUTvq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D1%87%D0%BD%D0%B0%D1%8F_%D0%BE%D1%84%D0%B5%D1%80%D1%82%D0%B0_%D0%91%D1%8C%D1%8E%D1%82%D0%B8_%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D1%8F.pdf&name=%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D1%87%D0%BD%D0%B0%D1%8F_%D0%BE%D1%84%D0%B5%D1%80%D1%82%D0%B0_%D0%91%D1%8C%D1%8E%D1%82%D0%B8_%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D1%8F.pdf", text: "Публичная оферта" },
    politicsPD: { link: "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2F7%2BQAhPNaSrNKMy56rVLeQvDTdmakrNYSjbyvcriSFItuyY%2BpQM5elJ7TsUIHfUTvq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.pdf&name=%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.pdf&nosw=1", text: "Политика обработки персональных данных" },
    approvalPD: { link: "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2F7%2BQAhPNaSrNKMy56rVLeQvDTdmakrNYSjbyvcriSFItuyY%2BpQM5elJ7TsUIHfUTvq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D0%BD%D0%B0_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%202.pdf&name=%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D0%BD%D0%B0_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%202.pdf", text: "Согласие на обработку персональных данных" },
    approvalEmail: { link: "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2F7%2BQAhPNaSrNKMy56rVLeQvDTdmakrNYSjbyvcriSFItuyY%2BpQM5elJ7TsUIHfUTvq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D0%BD%D0%B0_%D1%80%D0%B0%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D1%83_%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D1%8B%D1%85_%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B8%CC%86.pdf&name=%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D0%BD%D0%B0_%D1%80%D0%B0%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D1%83_%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D1%8B%D1%85_%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B8%CC%86.pdf&nosw=1", text: "Согласие на рассылку электронных сообщений" },
  }

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.docs}>
          <div className={classes.row}>
            <a target ="_blank" href={linkDict.oferta.link}>{linkDict.oferta.text}</a>
            <a target ="_blank" href={linkDict.politicsPD.link}>{linkDict.politicsPD.text}</a>
          </div>
          <div className={classes.row}>
            <a target ="_blank" href={linkDict.approvalPD.link}>{linkDict.approvalPD.text}</a>
            <a target ="_blank" href={linkDict.approvalEmail.link}>{linkDict.approvalEmail.text}</a>
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
