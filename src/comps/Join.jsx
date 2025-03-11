import React from "react";
import classes from "../css-modules/Join.module.scss";

const Join = () => {
  const list = [
    {
      id: 1,
      text: "Штурман экспедиции получит <span>премиум подписку на полгода в Masters</span>",
    },
    {
      id: 2,
      text: "Путеводитель экспедиции получит <span>личную консультацию от меня</span>",
    },
    {
      id: 3,
      text: "Мастер экспедиции получит <span>доступ к моему премиальному продукту</span>",
    },
  ];

  // Функция для добавления класса highlight в теги span
  const addHighlightClass = (htmlString) => {
    return htmlString.replace(/<span>/g, `<span class=${classes.highlight}>`);
  };

  return (
    <div className={classes.container}>
      <div className={classes.headers}>
        <h5 className={classes.text__first}>
          Ты можешь открыть доступ к шести ДОПОЛНИТЕЛЬНЫМ урокам и материалам{" "}
        </h5>
        <h5 className={classes.text_second}>
          Зарабатывай золотые монеты и трать их на рынке экспедиции
        </h5>
      </div>
      <div className={classes.row}>
        <h3 className={classes.jointext}>
          Присоединяйся к нашей Бьюти Экспедиции, завоевывай звания и рейтинги,
          получай за них ценные награды
        </h3>
      </div>
      <div className={classes.row}>
        <ul className={classes.list}>
          {list.map((item, index) => (
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
  );
};

export default Join;
