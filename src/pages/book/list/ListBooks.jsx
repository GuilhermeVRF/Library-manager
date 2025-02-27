import React, { useEffect, useState } from 'react';
import style from './listBooks.module.css';
import PopupReview from '../../../components/pop-up-review/PopupReview';

function ListBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Função assíncrona para buscar os livros da API
        const fetchBooks = async () => {
            try {
                // Fazendo a requisição para a API
                const response = await fetch(`http://localhost:8080/library/book/${sessionStorage.getItem('userId')}`);

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


    // Função para traduzir o status de conservação
    const translateConservationStatus = (status) => {
        switch (status.toLowerCase()) {
            case 'good':
                return 'Bom';
            case 'regular':
                return 'Regular';
            case 'bad':
                return 'Ruim';
            default:
                return 'Desconhecido';
        }
    };

    // Função para fazer uma requisição AJAX para a rota específica do livro
    const changeBookStatus = async (bookId) => {
        try {
            const response = await fetch(`http://localhost:8080/library/book/status/${bookId}`, {
                method: 'POST'
            });

            if (!response.ok) {
                throw new Error("Erro ao buscar detalhes do livro");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao atualizar o status do livro. Tente novamente mais tarde.");
        }
    };

    return (
        <div className={style.container_books}>
            <h1>Livros</h1>
            <table className={style.books_table}>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Edição</th>
                        <th>Estado de conservação</th>
                        <th>Status</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.edition}</td>
                            <td>{translateConservationStatus(book.conservationStatus)}</td>
                            <td>
                                {book.isAvailable ? (
                                    <span>&#10003;</span> // Check mark
                                ) : (
                                    <button onClick={() => changeBookStatus(book.id)}>
                                        Ativar
                                    </button>
                                )}
                            </td>
                            <td><PopupReview/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListBooks;