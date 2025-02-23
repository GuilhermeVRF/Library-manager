import Input from "../../../components/input/input";
import style from './register.module.css';

function Register() {
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
            <option value="novo">Novo</option>
            <option value="usado">Usado</option>
            <option value="danificado">Danificado</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn_success">Cadastrar Livro</button>
      </form>
    </div>
  );
}

export default Register;
