import React from "react";
import classes from "../css-modules/Program.module.scss";
import Heading from '../UI/Heading'

const Program = () => {
  return (
    <div className={classes.container}>
      {Heading('Программа практикума')}
      <ul className={classes.list}>
        <li className={classes.item}>
          Как не выгорать от ведения социальных сетей?
        </li>
        <span className={classes.divider}></span>
        <li className={classes.item}>
          Авито: как привлекать клиентов продающей упаковкой объявления? Почему
          твой Авито не продает?
        </li>
        <span className={classes.topic}></span>
        <li className={classes.item}>
          Авито: какое продвижение выбрать, чтобы не слить весь бюджет в пустую?
          Как настроить систему так, чтобы клиенты записывались?
        </li>
        <span className={classes.divider}></span>
        <li className={classes.item}>
          Instagram: как генерировать темы для контента за считаные минуты? Как
          найти целевую аудиторию? И зачем она нужна? Боли и запросы целевой
          аудитории.
        </li>
        <span className={classes.topic}></span>
        <li className={classes.item}>
          Instagram: мы с вами оформим шапку профиля, аватарку и ник так, чтобы
          подписчики превращались в клиентов.
        </li>
        <span className={classes.topic}></span>
        <li className={classes.item}>
          Instagram: мы разберем какие актуальные должны быть у Бьюти-мастера и
          как через них выстраивать продажи.
        </li>
        <span className={classes.divider}></span>
        <li className={classes.item}>
          БОНУСНЫЙ УРОК: стратегия выхода Бьюти-мастера на доход от 100.000 руб.
        </li>
      </ul>
    </div>
  );
};

export default Program;
