import Book from "./Book";

const BookClub = ({ favoritesList }) => {
    return (
        <div>
            {favoritesList.map((favorite) => <Book />)}
        </div>
    );
};

export default BookClub;