import React from 'react';
import Popup from 'reactjs-popup';
import style from './PopUp.module.css';

const PopUp: React.FC = () => {
  const renderPopupContent = (close: () => void) => (
    <div className={style.modal}>
      <div className={style.header}>
        <h3>Modal Title</h3>
      </div>
      <div className={style.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
        Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
        delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
      </div>
    </div>
  );

  return (
    <Popup modal trigger={<button className={style.button}> Trocar </button>} nested>
      {(close: () => void) => renderPopupContent(close)}
    </Popup>
  );
};

export default PopUp;