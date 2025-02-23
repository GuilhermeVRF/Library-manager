import Input from "../../../components/input/input";
import style from './register-book.module.css';

function RegisterBook() {
  return (
    <div className={style.container_register}>
      <h1 className={style.title}>Cadastro de Livro</h1>
      <form className={style.form} action="">
        <div className="input_group">
          <label htmlFor="title" className="label">Título:</label>
          <Input type="text" placeholder="Título" />
        </div>
        
        <div className="input_group">
          <label htmlFor="author" className="label">Autor:</label>
          <Input type="text" placeholder="Autor" />
        </div>
        
        <div className="input_group">
          <label htmlFor="edition" className="label">Edição:</label>
          <Input type="text" placeholder="Edição" />
        </div>
        
        <div className="input_group">
          <label htmlFor="condition" className="label">Estado de Conservação:</label>
          <select id="condition" className="input">
            <option value="GOOD">Novo</option>
            <option value="REGULAR">Usado</option>
            <option value="BAD">Danificado</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn_success">Cadastrar Livro</button>
      </form>
    </div>
  );
}

export default RegisterBook;
