import React from "react";
import classes from "../css-modules/Join.module.scss";

const Join = () => {
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
          <li className={classes.item}>
            Штурман экспедиции получит&nbsp;
            <span className={classes.highlight}>
              премиум подписку на полгода в Masters
            </span>
          </li>
          <li className={classes.item}>
            Путеводитель экспедиции получит&nbsp;
            <span className={classes.highlight}>
              личную консультацию от меня
            </span>
          </li>
          <li className={classes.item}>
            Мастер экспедиции получит&nbsp;
            <span className={classes.highlight}>
              доступ к моему премиальному продукту
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Join;
