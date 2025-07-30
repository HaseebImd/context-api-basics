import React, { useState } from "react";
import { useBooks } from "../context/index.js";

export default function AddBook() {
    const [title, setTitle] = useState("");
    const { addBook } = useBooks();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addBook(title);
            setTitle("");
        }
    };

    return (
        <div className="card">
            <h2>Add a Book</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter book title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
