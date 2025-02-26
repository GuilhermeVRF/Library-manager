import { useState } from "react";
import Input from "../../../components/input/input";
import style from './register.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleRegister = async (e) => {
    e.preventDefault(); 

    // Objeto com os dados do formulário
    const userData = {
      name: name,
      email: email,
      password: password,
    };

    try {
      // Fazendo o fetch para a API
      const response = await fetch("http://localhost:8080/library/person", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData), 
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }

      const data = await response.json();
      console.log("Usuário cadastrado com sucesso:", data);

      navigate('/login');
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar usuário. Tente novamente.");
    }
  }

  return (
    <div className={style.container_register}>
      <h1 className={style.title}>Registre o usuário</h1>
      <form className={style.form} onSubmit={handleRegister}>
        <div className="input_group">
          <label htmlFor="name" className="label">Nome:</label>
          <Input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)}/>
        </div>
        
        <div className="input_group">
          <label htmlFor="email" className="label">Email:</label>
          <Input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        
        <div className="input_group">
          <label htmlFor="password" className="label">Senha:</label>
          <Input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        
        <button type="submit" className="btn btn_success">Registrar</button>
      </form>
      <p>
        Possui uma conta? <Link to="/login">Realizar Login</Link>
      </p>
    </div>
  );
}

export default Register;