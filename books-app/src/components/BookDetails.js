const BookDetails = ({ books, routeProps }) => {
  const foundMatch = books.find(
    (book) => book.isbn === routeProps.match.params.isbn
  );

  console.log(foundMatch);

  return <p>Book Details Component</p>;
};

export default BookDetails;
