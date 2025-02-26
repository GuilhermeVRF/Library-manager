import style from "./card.module.css";
import PopupModal from "../pop-up/PopupModal";

function Card({bookId, bookTitle, bookOwnerName, bookConservationStatus, bookEdition, bookOwnerId}) {
  // Função para traduzir o status de conservação
  const translateConservationStatus = (status) => {
    switch (status.toLowerCase()) {
        case 'good':
            return 'Bom';
        case 'regular':
            return 'Regular';
        case 'bad':
            return 'Ruim';
        default:
            return 'Desconhecido';
    }
  };
  
  return (
    <div className={style.card_body}>
      <div className={style.same_place}>
        <div className={style.card_text}>
          <h1>{ bookTitle }</h1>
          <h4>Dono: { bookOwnerName }</h4>
          <h4>Estado: {translateConservationStatus(bookConservationStatus)}</h4>
          <h4>Edição: {bookEdition}</h4>
        </div>
        <i className="fa-solid fa-book fa-xl"></i>
      </div>

      <PopupModal />
    </div>
  );
}

export default Card;
