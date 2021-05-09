import Book from "./Book";

const BookClub = ({ favoritesList }) => {
  return (
    <div className="books-container">
      {favoritesList.map((favorite) => (
        <Book key={favorite.title} {...favorite}/>
      ))}
    </div>
  );
};

export default BookClub;
