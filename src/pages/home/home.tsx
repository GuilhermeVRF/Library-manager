import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import style from './home.module.css';
import React, { useEffect, useState } from "react";
import Card from "../../components/card-home/card";

export default function Home() {
  const [books, setBooks] = useState([]);
  
      useEffect(() => {
          // Função assíncrona para buscar os livros da API
          const fetchBooks = async () => {
              try {
                  // Fazendo a requisição para a API
                  const response = await fetch(`http://localhost:8080/library/book`);
  
                  if (!response.ok) {
                      throw new Error("Erro ao buscar os livros");
                  }
  
                  // Converte a resposta para JSON
                  const data = await response.json();
  
                  // Atualiza o estado com os dados recebidos
                  setBooks(data);
              } catch (error) {
                  console.error("Erro:", error);
                  alert("Erro ao carregar os livros. Tente novamente mais tarde.");
              }
          };
  
          // Chama a função para buscar os livros
          fetchBooks();
      }, []);

  return (
    <>
      <Header />
      <section className={style.home_section}>
        <h1>TROCA DE LIVROS</h1>
        <div className={style.container_card}>
        {books.map((book) => (
            <Card 
              bookId={book.id}
              bookTitle={book.title}
              bookOwnerId={book.owner.id}
              bookConservationStatus={book.conservationStatus}
              bookEdition={book.edition}
              bookIsAvaiable={book.isAvailable}
              bookOwnerName={book.owner.name}
            />
        ))} 
        </div>
        
      </section>
    </>
  );
}
