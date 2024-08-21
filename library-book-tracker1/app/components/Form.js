import React, { useState } from 'react';

function Form({ addBook }) {
  const [bookDetails, setBookDetails] = useState({});
  const [showToast, setShowToast] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      title: e.target.title.value,
      author: e.target.author.value,
      genre: e.target.genre.value,
      year: e.target.year.value,
      isbn: e.target.isbn.value,
    };
    setBookDetails(newBook);
    addBook(newBook); // Add the new book to the list
    setShowToast(true);

    // Reset form fields
    e.target.reset();

    // Hide the toast after a delay
    setTimeout(() => {
      setShowToast(false);
    }, 5000); // 5 seconds delay
  };

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={submitHandler} className="bg-white p-8 shadow-md rounded-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Book Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter book title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Enter author's name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="genre" className="block text-gray-700 text-sm font-bold mb-2">
            Genre
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            placeholder="Enter genre"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="year" className="block text-gray-700 text-sm font-bold mb-2">
            Year of Publication
          </label>
          <input
            type="number"
            id="year"
            name="year"
            placeholder="Enter year of publication"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="isbn" className="block text-gray-700 text-sm font-bold mb-2">
            ISBN
          </label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            placeholder="Enter ISBN number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-amber-800 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Book
          </button>
        </div>
      </form>

      {showToast && (
        <div className="fixed bottom-4 right-4 bg-amber-800 text-white px-4 py-2 rounded shadow-lg">
          <p><strong>Last Added Book:</strong></p>
          <p>Title: {bookDetails.title}</p>
          <p>Author: {bookDetails.author}</p>
          <p>Genre: {bookDetails.genre}</p>
          <p>Year: {bookDetails.year}</p>
          <p>ISBN: {bookDetails.isbn}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
