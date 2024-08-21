
import React from 'react';
import { useSortedBooks } from '../custom_hook/useSortedBooks';

function BooksList({ books }) {
  const sortedBooks = useSortedBooks(books);

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Books List</h2>
      <ul>
        {sortedBooks.length > 0 ? (
          sortedBooks.map((book, index) => (
            <li
              key={index}
              className="bg-amber-800 text-white p-4 mb-2 rounded shadow-md"
            >
              <p><strong>Title:</strong> {book.title}</p>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p><strong>Year:</strong> {book.year}</p>
              <p><strong>ISBN:</strong> {book.isbn}</p>
            </li>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </ul>
    </div>
  );
}

export default BooksList;
