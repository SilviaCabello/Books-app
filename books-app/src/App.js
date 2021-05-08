import { useState } from "react";
import "./App.css";
import BookClub from "./components/BookClub";
import BooksList from "./components/BooksList";
import books from "./data.js";

function App() {
  const [favorites, setFavorites] = useState([])

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
