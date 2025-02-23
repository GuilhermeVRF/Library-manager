import Input from "../../../components/input/input";
import style from './register.module.css';

function Register() {
  return (
    <div className={style.container_register}>
      <h1 className={style.title}>Registre o usuário</h1>
      <form className={style.form} action="">
        <div className="input_group">
          <label htmlFor="name" className="label">Nome:</label>
          <Input type="text" placeholder="Nome" />
        </div>
        
        <div className="input_group">
          <label htmlFor="email" className="label">Email:</label>
          <Input type="text" placeholder="Email" />
        </div>
        
        <div className="input_group">
          <label htmlFor="password" className="label">Senha:</label>
          <Input type="password" placeholder="Senha"/>
        </div>
        
        <button type="submit" className="btn btn_success">Registrar</button>
      </form>
    </div>
  );
}

export default Register;