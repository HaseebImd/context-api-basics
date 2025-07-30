import React from "react";
import { useBooks } from "../context/index.js";

export default function BookList() {
    const { books } = useBooks();

    return (
        <div className="card">
            <h2>Books List</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>📚 {book.title}</li>
                ))}
            </ul>
        </div>
    );
}
