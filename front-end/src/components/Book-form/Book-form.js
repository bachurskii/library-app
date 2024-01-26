import { useState } from "react";

import "./Book-form.css";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/slices/booksSlice";
import booksData from "../../data/books.json";
import CreateBookWithId from "../../utils/createBookWithId";
const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (author && title) {
      const book = CreateBookWithId({ title, author });

      dispatch(addBook(book));
      setTitle("");
      setAuthor("");
    }
  };
  const handleAddRandomBook = () => {
    const randomIndexBook = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndexBook];
    const randomBookId = CreateBookWithId(randomBook);
    dispatch(addBook(randomBookId));
  };
  return (
    <div className="app-block book-form">
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add book</button>
        <button onClick={() => handleAddRandomBook()} type="button">
          Add random book
        </button>
      </form>
    </div>
  );
};
export default BookForm;
