

'use client';
import React, { useState } from 'react';
import Form from "./components/Form";
import BooksList from "./components/BooksComponents";

export default function Home() {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div>
      <Form addBook={addBook} />
      <BooksList books={books} />
    </div>
  );
}
