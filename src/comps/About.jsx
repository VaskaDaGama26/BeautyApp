import React from "react";
import classes from "../css-modules/About.module.scss";
import Heading from "../UI/Heading";
import aboutImg from "/images/aboutImg.png";

const About = () => {
  const listItems = [
    {
      id: 1,
      title: "Проходит в Telegram-канале",
      src: "/BeautyApp/icons/place.svg",
    },
    {
      id: 2,
      title: "Уроки в записи, продолжительность 15-30 минут",
      src: "/BeautyApp/icons/recording.svg",
    },
    {
      id: 3,
      title:
        "Доступ к файлам: тариф «Пустыня» – 1 месяц, тариф «Лагерь» – 3 месяца",
      src: "/BeautyApp/icons/files.svg",
    },
    {
      id: 4,
      title: "Обратная связь до 1 месяца на тарифе «Лагерь»",
      src: "/BeautyApp/icons/feedback.svg",
    },
    {
      id: 5,
      title: "Оплата полностью или оформление беспроцентной рассрочки",
      src: "/BeautyApp/icons/payment.svg",
    },
  ];

  return (
    <div className={classes.container}>
      {Heading("О практикуме")}
      <div className={classes.row}>
        <ul className={classes.block__list}>
          {listItems.map((item, index) => (
            <div key={index} className={classes.wrapper}>
              <li className={classes.item}>
                <div className={classes.badge}>
                  <img src={item.src} alt="" />
                </div>
                {item.title}
              </li>
            </div>
          ))}
        </ul>
        <div className={classes.block__img}>
          <img src={aboutImg} alt="About" />
        </div>
      </div>
    </div>
  );
};

export default About;
