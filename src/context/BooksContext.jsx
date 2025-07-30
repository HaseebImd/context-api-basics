import React, { createContext, useState, useContext } from "react";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([
        { id: 1, title: "React Basics" },
        { id: 2, title: "Advanced JavaScript" },
    ]);

    const addBook = (title) =>
        setBooks([...books, { id: Date.now(), title }]);

    return (
        <BooksContext.Provider value={{ books, addBook }}>
            {children}
        </BooksContext.Provider>
    );
};

export const useBooks = () => useContext(BooksContext);
