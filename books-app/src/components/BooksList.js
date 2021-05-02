import Book from "./Book";

const BooksList = ({ booksInfo }) => {
  console.log(booksInfo);
  return (
    <div className="books-container">
      {booksInfo.map((book) => (
        <Book {...book} />
      ))}
    </div>
  );
};

export default BooksList;
