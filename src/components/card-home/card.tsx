import React from "react";
import style from "./card.module.css";
import PopUp from "../pop-up/popUp";

function Card() {
  return (
    <div className={style.card_body}>
      <div className={style.same_place}>
        <div className={style.card_text}>
          <h1>Nome</h1>
          <h4>Usuario dono</h4>
        </div>
        <i className="fa-solid fa-book fa-xl"></i>
      </div>

      <PopUp/>
    </div>
  );
}

export default Card;
