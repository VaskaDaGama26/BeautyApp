import React, { useState } from "react";
import classes from "./Modal.module.scss";

const Modal = ({ show, onClose }) => {
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
            <a href="https://drive.google.com/your-document-link-1" target="_blank" rel="noopener noreferrer">
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
            <a href="https://drive.google.com/your-document-link-2" target="_blank" rel="noopener noreferrer">
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
            <a href="https://drive.google.com/your-document-link-3" target="_blank" rel="noopener noreferrer">
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
            <a href="https://drive.google.com/your-document-link-4" target="_blank" rel="noopener noreferrer">
            согласие на рассылку электронных сообщений
            </a>
          </label>
        </div>
        <div className={classes.modal_footer}>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <button className={classes.button} disabled={!allChecked}>Перейти к оплате</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
