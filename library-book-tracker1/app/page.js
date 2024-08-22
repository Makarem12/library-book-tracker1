

'use client';
import React, { useContext, useState } from 'react';
import Form from "./components/Form";
import BooksList from "./components/BooksComponents";
import LoginForm from './components/LoginForm';
import { AuthContext } from './context/Auth';

export default function Home() {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const {tokens} = useContext(AuthContext)
  return (
    <div>
      {tokens ? <><Form addBook={addBook} /> <BooksList books={books} /></> : <LoginForm />}
      
      
      
    </div>
  );
}
