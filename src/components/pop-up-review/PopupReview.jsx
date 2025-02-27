import Popup from 'reactjs-popup';
import style from './PopupReview.module.css';


const PopupReview = ({BookId}) => {


  const renderPopupContent = (close) => (
    <div className={style.modal}>
      <div className={style.header}>
        <h3>Escrever sua review do livro</h3>
      </div>
      <div className={style.content}>
       <textarea name="" id=""></textarea>
      </div>

      <button className='btn btn_success'>Enviar</button>
    </div>
  );

  return (
    <Popup modal trigger={<button className={style.button}> <i className="fa-solid fa-pen-nib fa-xl"></i> </button>} nested>
      {(close) => renderPopupContent(close)}
    </Popup>
  );
};

export default PopupReview;
