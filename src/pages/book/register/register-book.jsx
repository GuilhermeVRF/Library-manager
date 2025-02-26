import { useState } from "react";
import Input from "../../../components/input/input";
import style from './register-book.module.css';

function RegisterBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [edition, setEdition] = useState('');
  const [conservationStatus, setConservationStatus] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault(); 

    // Objeto com os dados do formulário
    const bookData = {
      title: title,
      author: author,
      edition: edition,
      conservationStatus: conservationStatus,
    };

    try {
      // Fazendo o fetch para a API
      const response = await fetch(`http://localhost:8080/library/book/${sessionStorage.getItem('userId')}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData), 
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar livro");
      }

      const data = await response.json();
      console.log("Livro cadastrado com sucesso:", data);
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar livro. Tente novamente.");
    }
  }

  return (
    <div className={style.container_register}>
      <h1 className={style.title}>Cadastro de Livro</h1>
      <form className={style.form} onSubmit={handleRegister}>
        <div className="input_group">
          <label htmlFor="title" className="label">Título:</label>
          <Input type="text" placeholder="Título" onChange={(e) => setTitle(e.target.value)}/>
        </div>
        
        <div className="input_group">
          <label htmlFor="author" className="label">Autor:</label>
          <Input type="text" placeholder="Autor" onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        
        <div className="input_group">
          <label htmlFor="edition" className="label">Edição:</label>
          <Input type="text" placeholder="Edição" onChange={(e) => setEdition(e.target.value)}/>
        </div>
        
        <div className="input_group">
          <label htmlFor="condition" className="label">Estado de Conservação:</label>
          <select id="condition" className="input" onChange={(e) => setConservationStatus(e.target.value)}>
            <option value="GOOD">Novo</option>
            <option value="REGULAR" selected>Usado</option>
            <option value="BAD">Danificado</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn_success">Cadastrar Livro</button>
      </form>
    </div>
  );
}

export default RegisterBook;
