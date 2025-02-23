import Input from "../../../components/input/input";
import style from './login.module.css';
import { Link } from 'react-router-dom'; 

function Login() {

  return (
    <div className={style.container_login}>
      <h1 className={style.title}>Realizar Login</h1>
      <form className={style.form} action="">
        <div className="input_group">
          <label htmlFor="email" className="label">Email:</label>
          <Input type="text" placeholder="Email" />
        </div>
        
        <div className="input_group">
          <label htmlFor="password" className="label">Senha:</label>
          <Input type="password" placeholder="Senha"/>
        </div>
        
        <button type="submit" className="btn btn_success">Logar</button>
      </form>
      <p>
        Não possui uma conta? <Link to="/register">Registre-se</Link>
      </p>
    </div>
  )
}

export default Login
