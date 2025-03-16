import React, { useState } from "react";
import classes from "./Modal.module.scss";

const ModalDesert = ({ show, onClose}) => {
  const [checkedItems, setCheckedItems] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  const handleCheckboxChange = (e) => {
    setCheckedItems({
      ...checkedItems,
      [e.target.name]: e.target.checked,
    });
  };

  const allChecked = Object.values(checkedItems).every(Boolean);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const closeModal = () => {
    setCheckedItems({
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
    });
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div className={classes.modal_overlay} onClick={handleOverlayClick}>
      <div className={classes.modal_content}>
        <div className={classes.modal_header}>
          <h2 className={classes.header}>Переходя к оплате:</h2>
          <img
            src="/icons/close.svg"
            alt="Закрыть"
            className={classes["close-icon"]}
            onClick={closeModal}
          />
        </div>
        <div className={classes.modal_body}>
          <label>
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkedItems.checkbox1}
              onChange={handleCheckboxChange}
            /> Я принимаю условия&nbsp;
            <a href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2F7%2BQAhPNaSrNKMy56rVLeQvDTdmakrNYSjbyvcriSFItuyY%2BpQM5elJ7TsUIHfUTvq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D1%87%D0%BD%D0%B0%D1%8F_%D0%BE%D1%84%D0%B5%D1%80%D1%82%D0%B0_%D0%91%D1%8C%D1%8E%D1%82%D0%B8_%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D1%8F.pdf&name=%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D1%87%D0%BD%D0%B0%D1%8F_%D0%BE%D1%84%D0%B5%D1%80%D1%82%D0%B0_%D0%91%D1%8C%D1%8E%D1%82%D0%B8_%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D1%8F.pdf" target="_blank" rel="noopener noreferrer">
              Публичной оферты продавца
            </a>
          </label>
          <label>
            <input
              type="checkbox"
              name="checkbox2"
              checked={checkedItems.checkbox2}
              onChange={handleCheckboxChange}
            /> Я принимаю&nbsp;
            <a href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2F7%2BQAhPNaSrNKMy56rVLeQvDTdmakrNYSjbyvcriSFItuyY%2BpQM5elJ7TsUIHfUTvq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.pdf&name=%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.pdf" target="_blank" rel="noopener noreferrer">
              Политику обработки персональных данных
            </a>
          </label>
          <label>
            <input
              type="checkbox"
              name="checkbox3"
              checked={checkedItems.checkbox3}
              onChange={handleCheckboxChange}
            /> Я даю&nbsp;
            <a href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2F7%2BQAhPNaSrNKMy56rVLeQvDTdmakrNYSjbyvcriSFItuyY%2BpQM5elJ7TsUIHfUTvq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D0%BD%D0%B0_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%202.pdf&name=%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D0%BD%D0%B0_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%202.pdf&nosw=1" target="_blank" rel="noopener noreferrer">
              Согласие на обработку персональных данных
            </a>
          </label>
          <label>
            <input
              type="checkbox"
              name="checkbox4"
              checked={checkedItems.checkbox4}
              onChange={handleCheckboxChange}
            /> Я даю&nbsp;
            <a href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2F7%2BQAhPNaSrNKMy56rVLeQvDTdmakrNYSjbyvcriSFItuyY%2BpQM5elJ7TsUIHfUTvq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D0%BD%D0%B0_%D1%80%D0%B0%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D1%83_%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D1%8B%D1%85_%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B8%CC%86.pdf&name=%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D0%BD%D0%B0_%D1%80%D0%B0%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D1%83_%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D1%8B%D1%85_%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B8%CC%86.pdf" target="_blank" rel="noopener noreferrer">
            согласие на рассылку электронных сообщений
            </a>
          </label>
        </div>
        <div className={classes.modal_footer}>
          <a href="https://payform.ru/se6HdtM/" target="_blank" rel="noopener noreferrer">
            <button className={classes.button} disabled={!allChecked}>Перейти к оплате</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalDesert;
