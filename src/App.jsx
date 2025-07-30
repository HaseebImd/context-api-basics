import React from "react";
import UserProfile from "./components/UserProfile";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import "./styles.css";

export default function App() {
  return (
      <div className="container">
        <h1>📚 Multi-Context React App</h1>
        <UserProfile />
        <AddBook />
        <BookList />
      </div>
  );
}
