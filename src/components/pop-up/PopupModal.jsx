import React from 'react';
import Popup from 'reactjs-popup';
import style from './PopupModal.module.css';

const PopupModal = ({ bookOwnerId, bookId }) => {
  const renderPopupContent = (close) => (
    <div className={style.modal}>
      <div className={style.header}>
        <h3>Modal Title</h3>
      </div>
      <div className={style.content}>
        <p>Book Owner ID: {bookOwnerId}</p>
        <p>Book ID: {bookId}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
        </p>
      </div>
    </div>
  );

  return (
    <Popup modal trigger={<button className={style.button}> Trocar </button>} nested>
      {(close) => renderPopupContent(close)}
    </Popup>
  );
};

export default PopupModal;
