// components/BooksComponents.js
import useSortedBooks from "../custom_hook/useSortedBooks";

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    year: 1960,
    isbn: "978-0-06-112008-4",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    year: 1949,
    isbn: "978-0-452-28423-4",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    year: 1813,
    isbn: "978-1-59308-201-7",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    year: 1925,
    isbn: "978-0-7432-7356-5",
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure",
    year: 1851,
    isbn: "978-0-14-243724-7",
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical Fiction",
    year: 1869,
    isbn: "978-0-679-64037-3",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    year: 1951,
    isbn: "978-0-316-76948-0",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    year: 1937,
    isbn: "978-0-618-00221-3",
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Psychological Fiction",
    year: 1866,
    isbn: "978-0-14-305814-4",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Science Fiction",
    year: 1932,
    isbn: "978-0-06-085052-4",
  }
];

function BooksList() {
  const sortedBooks = useSortedBooks(books);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {sortedBooks.map((book) => (
        <div key={book.isbn} className="bg-amber-700 dark:bg-amber-700 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">{book.title}</h2>
          <p className="text-gray-700 dark:text-gray-300">Author: {book.author}</p>
          <p className="text-gray-700 dark:text-gray-300">Genre: {book.genre}</p>
          <p className="text-gray-700 dark:text-gray-300">Year: {book.year}</p>
        </div>
      ))}
    </div>
  );
}

export default BooksList;
