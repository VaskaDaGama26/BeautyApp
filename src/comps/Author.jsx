import React from "react";
import Heading from "../UI/Heading";
import classes from "../css-modules/Author.module.scss";

const Author = () => {
  const listAuthor = [
    {
      id: 1,
      text: "Разработала систему, которая позволила <span>3 раза собрать базу с нуля</span>",
    },
    {
      id: 2,
      text: "<span>Через 2 месяца</span> правильного ведения блога заработала первые 100 000 рублей как мастер",
    },
    {
      id: 3,
      text: "Разработала <span>авторскую методику</span> привлечения клиентов с Авито",
    },
    {
      id: 4,
      text: "<span>Набрала более 20000 подписчиков в блоге с нуля</span> бесплатно через Reels за 5 месяцев",
    },
    {
      id: 5,
      text: "<span>Собрала более 5000 бьюти-мастеров в своём телеграм канале</span> за 3 месяца",
    },
    {
      id: 6,
      text: "Полностью вышла в онлайн за<span> 2 месяца</span> ведения блога",
    },
  ];

  // Функция для добавления класса highlight в теги span
  const addHighlightClass = (htmlString) => {
    return htmlString.replace(/<span>/g, `<span class=${classes.highlight}>`);
  };

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
            Мастера с помощью моих инструментов
            <br /> увеличивают доход в 2-3 раза, легко привлекают
            <br /> новых клиентов и переходят в онлайн
          </div>
          <ul className={classes.list}>
            {listAuthor.map((item, index) => (
              <li
                key={index}
                className={classes.item}
                dangerouslySetInnerHTML={{
                  __html: addHighlightClass(item.text),
                }}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Author;
