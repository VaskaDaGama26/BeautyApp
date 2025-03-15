import React, { useState } from "react";
import Heading from "../UI/Heading";
import classes from "../css-modules/Plans.module.scss";
import ModalCamp from "../UI/ModalCamp";
import ModalDesert from "../UI/ModalDesert";

const Plans = () => {

  const [showModalDesert, setShowModalDesert] = useState(false);
  const [showModalCamp, setShowModalCamp] = useState(false);

  const openModalDesert = () => {
    setShowModalDesert(true);
    document.body.classList.add("no-scroll");
  };

  const closeModalDesert = () => {
    setShowModalDesert(false);
    document.body.classList.remove("no-scroll");
  };

  const openModalCamp = () => {
    setShowModalCamp(true);
    document.body.classList.add("no-scroll");
  };

  const closeModalCamp = () => {
    setShowModalCamp(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <div id="plans" className={classes.container}>
      {Heading("Тарифы")}
      <div className={classes.row}>
        <div className={`${classes.plan} ${classes.camp}`}>
          <div className={classes.headings}>
            <h1 className={classes.name}>Лагерь</h1>
            <div className={classes.pricing}>
              <h2 className={classes.price}>6490 ₽</h2>
              <h3 className={classes.alert}>
                стоимость с учетом скидки,
                <br />
                действует 24 часа после получения этой ссылки
              </h3>
            </div>
          </div>

          <ul className={classes.list}>
            <li className={classes.item}>7 уроков в записи</li>
            <li className={classes.item}>Общий чат с участниками</li>
            <li className={classes.item}>Возможность выиграть:</li>
            <ul className={classes.list__sub}>
              <li className={classes.item__sub}>Личную консультацию</li>
              <li className={classes.item__sub__black}>
                Премиум подписку на полгода в Masters
              </li>
              <li className={classes.item__sub__black}>
                Доступ к моему премиальному продукту
              </li>
            </ul>
            <li className={classes.item__black}>
              Обратная связь от Полины Дмитриевой 1 месяц
            </li>
            <li className={classes.item}>
              Доступ к материалам практикума - 3 месяца
            </li>
            <li className={classes.item}>Есть рассрочка</li>
          </ul>
          <button onClick={openModalCamp} className={classes.button}>
            Купить
          </button>
          <ModalCamp show={showModalCamp} onClose={closeModalCamp} />
        </div>
        <div className={`${classes.plan} ${classes.desert}`}>
          <div className={classes.headings}>
            <h1 className={classes.name}>Пустыня</h1>
            <div className={classes.pricing}>
              <h2 className={classes.price}>3990 ₽</h2>
              <h3 className={classes.alert}>
                стоимость с учетом скидки,
                <br />
                действует 24 часа после получения этой ссылки
              </h3>
            </div>
          </div>

          <ul className={classes.list}>
            <li className={classes.item}>7 уроков в записи</li>
            <li className={classes.item}>Общий чат с участниками</li>
            <li className={classes.item}>Возможность выиграть:</li>
            <ul className={classes.list__sub}>
              <li className={classes.item__sub}>Личную консультацию</li>
            </ul>
            <li className={classes.item}>
              Доступ к материалам практикума - 3 месяца
            </li>
            <li className={classes.item}>Есть рассрочка</li>
          </ul>
          <button onClick={openModalDesert} className={classes.button}>
            Купить
          </button>
          <ModalDesert show={showModalDesert} onClose={closeModalDesert}/>
        </div>
      </div>
    </div>
  );
};

export default Plans;
