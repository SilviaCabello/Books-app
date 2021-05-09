import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import BookClub from "./components/BookClub";
import BooksList from "./components/BooksList";
import Navbar from "./components/Navbar";

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
      <Navbar />
      <Switch>
        <Route path="/bookClub">
          <BookClub favoritesList={favorites} />
        </Route>
        <Route
          path="/"
          render={() => (
           <BooksList handleFavorite={handleFavorite} booksInfo={books} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
