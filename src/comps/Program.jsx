import React from "react";
import classes from "../css-modules/Program.module.scss";
import Heading from "../UI/Heading";

const Program = () => {
  const programItems = [
    {
      id: 1,
      stroke: "divider",
      text: "Как не выгорать от ведения социальных сетей?",
    },
    {
      id: 2,
      stroke: "topic",
      text: "Авито: как привлекать клиентов продающей упаковкой объявления? Почему твой Авито не продает?",
    },
    {
      id: 3,
      stroke: "divider",
      text: "Авито: какое продвижение выбрать, чтобы не слить весь бюджет в пустую? Как настроить систему так, чтобы клиенты записывались?",
    },
    {
      id: 4,
      stroke: "topic",
      text: "Instagram: как генерировать темы для контента за считаные минуты? Как найти целевую аудиторию? И зачем она нужна? Боли и запросы целевой аудитории.",
    },
    {
      id: 5,
      stroke: "topic",
      text: "Instagram: мы с вами оформим шапку профиля, аватарку и ник так, чтобы подписчики превращались в клиентов.",
    },
    {
      id: 6,
      stroke: "divider",
      text: "Instagram: мы разберем какие актуальные должны быть у Бьюти-мастера и как через них выстраивать продажи.",
    },
    {
      id: 7,
      text: "БОНУСНЫЙ УРОК: стратегия выхода Бьюти-мастера на доход от 100.000 руб.",
    },
  ];

  return (
    <div className={classes.container}>
      {Heading("Программа практикума")}
      <ul className={classes.list}>
        {programItems.map((item, index) => (
          <React.Fragment key={index}>
            <li key={item.id} className={classes.item}>
              {item.text}
            </li>
            <span
              key={`${index}-stroke`}
              className={classes[item.stroke]}
            ></span>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Program;
