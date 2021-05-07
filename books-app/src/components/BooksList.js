import Book from "./Book";

const BooksList = ({ booksInfo }) => {
  return (
    <div className="books-container">
      {booksInfo.map((book) => (
        <Book key={book.isbn} {...book} />
      ))}
    </div>
  );
};

export default BooksList;
