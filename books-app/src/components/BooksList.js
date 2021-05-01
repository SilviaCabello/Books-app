import Book from "./Book";

const BooksList = ({ booksInfo }) => {
  console.log(booksInfo);
  return (
    <div>
      <p>BooksList Component</p>
      {booksInfo.map((book) => (
        <Book {...book} />
      ))}
    </div>
  );
};

export default BooksList;
