import { useEffect, useState } from "react";
import "./App.css";
import BookClub from "./components/BookClub";
import BooksList from "./components/BooksList";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [books, setBooks] = useState([]);

  const fetchBooks = () => {
    fetch("https://fakerapi.it/api/v1/books?_quantity=15")
    .then((res) => res.json())
    .then((books) => setBooks(books.data));
  };

  useEffect(fetchBooks, []);

  const handleFavorite = (bookInfo) => {
    setFavorites([...favorites, bookInfo]);
  };

  return (
    <div className="App">
      <BookClub favoritesList={favorites}/>
      <BooksList handleFavorite={handleFavorite} booksInfo={books} />
    </div>
  );
}

export default App;
