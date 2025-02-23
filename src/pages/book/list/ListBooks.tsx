import { useState } from 'react';
import style from './listBooks.module.css';

function ListBooks() {
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

    // Estado inicial dos livros
    const [books, setBooks] = useState([
        { id: 1, title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', edition: '1', conservationStatus: 'good' },
        { id: 2, title: '1984', author: 'George Orwell', edition: '2', conservationStatus: 'regular' },
        { id: 3, title: 'Dom Quixote', author: 'Miguel de Cervantes', edition: '1', conservationStatus: 'bad' },
    ]);

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
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.edition}</td>
                            <td>{translateConservationStatus(book.conservationStatus)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListBooks;