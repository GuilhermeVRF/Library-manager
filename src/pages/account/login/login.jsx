import { useState } from "react";
import Input from "../../../components/input/input";
import style from './login.module.css';
import { Link, useNavigate } from 'react-router-dom'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e) => {
      e.preventDefault(); 

      // Objeto com os dados do formulário
      const userData = {
        email: email,
        password: password,
      };

      try {
        // Fazendo o fetch para a API
        const response = await fetch("http://localhost:8080/library/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData), 
        });

        if (!response.ok) {
          throw new Error("Erro ao logar usuário");
        }

        const data = await response.json();
        sessionStorage.setItem("userId", data.id);
        navigate('/book/list');
      } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao logar usuário. Tente novamente.");
    }
  }

  return (
    <div className={style.container_login}>
      <h1 className={style.title}>Realizar Login</h1>
      <form className={style.form} onSubmit={handleLogin}>
        <div className="input_group">
          <label htmlFor="email" className="label">Email:</label>
          <Input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        
        <div className="input_group">
          <label htmlFor="password" className="label">Senha:</label>
          <Input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
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
