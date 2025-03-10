import React from "react";
import classes from "../css-modules/About.module.scss";
import Heading from "../UI/Heading";
import aboutImg from "/images/aboutImg.png";

const About = () => {
  return (
    <div className={classes.container}>
      {Heading("О практикуме")}
      <div className={classes.row}>
        <ul className={classes.block__list}>
          <div className={classes.wrapper}>
            <li className={classes.item}>
              <div className={classes.badge}>
                <img src="/icons/place.svg" alt="" />
              </div>
              Проходит в Telegram-канале
            </li>
          </div>
          <div className={classes.wrapper}>
            <li className={classes.item}>
              <div className={classes.badge}>
                <img src="/icons/recording.svg" alt="" />
              </div>
              Уроки в записи, продолжительность
              <br /> 15-30 минут
            </li>
          </div>
          <div className={classes.wrapper}>
            <li className={classes.item}>
              <div className={classes.badge}>
                <img src="/icons/files.svg" alt="" />
              </div>
              Доступ к файлам: тариф «Пустыня» – 1 месяц, тариф «Лагерь» – 3 месяца
            </li>
          </div>
          <div className={classes.wrapper}>
            <li className={classes.item}>
              <div className={classes.badge}>
                <img src="/icons/feedback.svg" alt="" />
              </div>
              Обратная связь до 1 месяца
              <br />
              на тарифе «Лагерь»
            </li>
          </div>
          <div className={classes.wrapper}>
            <li className={classes.item}>
              <div className={classes.badge}>
                <img src="/icons/payment.svg" alt="" />
              </div>
              Оплата полностью или оформление беспроцентной рассрочки
            </li>
          </div>
        </ul>
        <div className={classes.block__img}>
          <img src={aboutImg} alt="About" />
        </div>
      </div>
    </div>
  );
};

export default About;
