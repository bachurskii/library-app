import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../redux/slices/booksSlice";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import { toggleFavorite } from "../../redux/slices/booksSlice";
import { selectBook } from "../../redux/slices/booksSlice";
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectFavoriteFilter,
} from "../../redux/slices/filterSlice";
import "./Book-list.css";
const BookList = () => {
  const books = useSelector(selectBook);
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const favoriteFilter = useSelector(selectFavoriteFilter);
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };
  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };
  const filteredBooks = books.filter((book) => {
    const matcheTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    const matcheAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase());
    const matcheFavorite = favoriteFilter ? book.isFavorite : true;
    return matcheTitle && matcheAuthor && matcheFavorite;
  });
  const hughLicghMatch = (text, filter) => {
    if (!filter) return text;

    const regex = new RegExp(`(${filter})`, "gi");
    return text.split(regex).map((substring, index) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={index} className="highlight">
            {substring}
          </span>
        );
      }
      return substring;
    });
  };
  return (
    <div className="app-block book-list">
      <h2>Book list</h2>
      {books.length === 0 ? (
        <p>No books avaible</p>
      ) : (
        <ul>
          {filteredBooks.map((book, index) => (
            <li key={book.id}>
              <div className="book-info">
                {++index}. {hughLicghMatch(book.title, titleFilter)} by{" "}
                <strong>{hughLicghMatch(book.author, authorFilter)}</strong>
              </div>
              <div className="book-actions">
                <span onClick={() => handleToggleFavorite(book.id)}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>

                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete book{" "}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default BookList;
