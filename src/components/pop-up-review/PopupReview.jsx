import { useState } from 'react';
import Popup from 'reactjs-popup';
import style from './PopupReview.module.css';


const PopupReview = ({bookId}) => {
  const [review, setReview] = useState('');

  // Função para enviar a review do livro
  const sendReview = async () => {
    try {
      const response = await fetch(`http://localhost:8080/library/review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idAuthor: sessionStorage.getItem('userId'),
          text: review,
          idBook: bookId
        })
      });

      if (!response.ok) {
        throw new Error("Erro ao criar a review");
      }

      close();
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar a review. Tente novamente mais tarde.");
    }
  };

  const renderPopupContent = (close) => (
    <div className={style.modal}>
      <div className={style.header}>
        <h3>Escrever sua review do livro</h3>
      </div>
      <div className={style.content}>
        <textarea value={review} onChange={(e) => setReview(e.target.value)}></textarea>
      </div>

      <button className='btn btn_success' onClick={() => sendReview()}>Enviar</button>
    </div>
  );

  return (
    <Popup modal trigger={<button className={style.button}> <i className="fa-solid fa-pen-nib fa-xl"></i> </button>} nested>
      {(close) => renderPopupContent(close)}
    </Popup>
  );
};

export default PopupReview;
