import Book from "./Book";

const BooksList = ({ booksInfo }) => {
  console.log(booksInfo);
  return (
    <div>
      <p>BooksList Component</p>
      <Book />
    </div>
  );
};

export default BooksList;
