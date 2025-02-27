import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import style from './PopupModal.module.css';

const PopupModal = ({ bookOwnerId, bookId, bookOwnerName, bookTitle }) => {
  const [books, setBooks] = useState([]);
  const [reviews, setReviews] = useState([]);

  // Função assíncrona para buscar os livros da API
  const fetchBooks = async () => {
    try {
      const response = await fetch(`http://localhost:8080/library/book/${sessionStorage.getItem('userId')}`);

      if (!response.ok) {
        throw new Error("Erro ao buscar os livros");
      }

      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao carregar os livros. Tente novamente mais tarde.");
    }
  };

  // Função assíncrona para buscar as reviews da API
  const fetchReviews = async () => {
    try {
      const response = await fetch(`http://localhost:8080/library/review/${bookId}`);

      if (!response.ok) {
        throw new Error("Erro ao buscar as reviews");
      }

      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao carregar as reviews. Tente novamente mais tarde.");
    }
  };

  // Efeito para buscar os livros quando o componente é montado
  useEffect(() => {
    fetchBooks();
  }, []);

  // Função para criar uma nova review
  const createExchange = async () => {
    try {
      const response = await fetch('http://localhost:8080/library/exchange', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idDonor: bookOwnerId,
          idReceiver: sessionStorage.getItem('userId'),
          idBook: bookId,
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar a troca');
      }

      alert('Troca realizada com sucesso');
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao realizar a troca. Tente novamente mais tarde.');
    }
  }

  // Efeito para buscar as reviews quando o bookId muda
  useEffect(() => {
    if (bookId) {
      fetchReviews();
      console.log(sessionStorage.getItem('userId'));
    }
  }, [bookId]);

  const renderPopupContent = (close) => (
    <div className={style.modal}>
      <div className={style.header}>
        <h3>Adquirir livro {bookTitle}</h3>
      </div>
      <div className={style.content}>
        <p className={style.exchangeMessage}>Você quer realizar uma troca com { bookOwnerName }!</p>

        {reviews.length > 0 && <h4>Reviews</h4>}
        <div className={style.reviews}>
          {reviews.map((review) => (
            <div key={review.id} className={style.review}>
              <p>{review.author} : {review.text}</p>
            </div>
          ))}
        </div>

        <button onClick={() => createExchange()} className={style.confirmExchangeBtn}>
          Confirmar Troca
        </button>

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
