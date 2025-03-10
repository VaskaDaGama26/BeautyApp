import React from "react";
import Heading from "../UI/Heading";
import classes from "../css-modules/Author.module.scss";

const Author = () => {
  return (
    <div className={classes.container}>
      <div className={classes.headings}>
        <h2 className={classes.name}>Дмитриева Полина</h2>
        {Heading("Автор практикума")}
      </div>

      <div className={classes.row}>
        <div className={classes.image}>
          <img src="/images/author.png" alt="" />
        </div>
        <div className={classes.block}>
          <div className={classes.badge}>
            Мастера с помощью моих инструментов<br /> увеличивают доход в 2-3 раза,
            легко привлекают<br /> новых клиентов и переходят в онлайн
          </div>
          <ul className={classes.list}>
            <li className={classes.item}>
              Разработала систему, которая позволил <span className={classes.highlight}>3 раза собрать базу с нуля</span>
            </li>
            <li className={classes.item}>
              <span className={classes.highlight}>Через 2 месяца</span> правильного видения блога заработала первые 100 000 рублей как мастер
            </li>
            <li className={classes.item}>Разработала <span className={classes.highlight}>авторскую методику</span> привлечения клиентов с Авито
            </li>
            <li className={classes.item}><span className={classes.highlight}> Набрала более 20000 подписчиков в блоге с нуля</span> бесплатно через Reels за 5 месяцев
            </li>
            <li className={classes.item}> <span className={classes.highlight}>Собрала более 5000 бьюти-мастеров в своём телеграм канале</span> за 3 месяца
            </li>
            <li className={classes.item}>Полностью вышла в онлайн за <span className={classes.highlight}>2 месяца</span> ведения блога
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Author;
