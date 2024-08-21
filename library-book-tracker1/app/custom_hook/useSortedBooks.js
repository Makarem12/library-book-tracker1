import { useState, useEffect } from 'react';

export function useSortedBooks(books) {
  const [sortedBooks, setSortedBooks] = useState([]);

  useEffect(() => {
    if (books.length > 0) {
      const sorted = [...books].sort((a, b) => a.title.localeCompare(b.title));
      setSortedBooks(sorted);
    }
  }, [books]);

  return sortedBooks;
}
