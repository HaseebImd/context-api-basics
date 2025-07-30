import React from "react";
import { UserProvider } from "./UserContext.jsx";
import { BooksProvider } from "./BooksContext";

export default function GlobalProvider({ children }) {
    return (
        <UserProvider>
            <BooksProvider>
                {children}
            </BooksProvider>
        </UserProvider>
    );
}
