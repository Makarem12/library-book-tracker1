'use client';
import Image from "next/image";
import Form from "./components/Form";
import BooksList from "./components/BooksComponents";

export default function Home() {
  return (
    <div>
      
      <Form />
      <BooksList />
    </div>
  );
}
