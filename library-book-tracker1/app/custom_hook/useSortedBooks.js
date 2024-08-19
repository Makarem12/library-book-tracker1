// custom_hook/useSortedBooks.js
import { useMemo } from 'react';

function useSortedBooks(books = []) {
  return useMemo(() => {
    if (!Array.isArray(books)) {
      console.error('Expected books to be an array');
      return [];
    }
    return [...books].sort((a, b) => a.title.localeCompare(b.title));
  }, [books]);
}

export default useSortedBooks;
