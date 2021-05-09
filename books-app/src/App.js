import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import BookClub from "./components/BookClub";
import BooksList from "./components/BooksList";
import Navbar from "./components/Navbar";
import BookDetails from "./components/BookDetails";

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
          exact path="/"
          render={() => (
           <BooksList handleFavorite={handleFavorite} booksInfo={books} />
          )}
        />
        <Route path="/books/:isbn" render={(routeProps) => <BookDetails routeProps={routeProps} books={books} />} />
      </Switch>
    </div>
  );
}

export default App;
