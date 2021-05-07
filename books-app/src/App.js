import "./App.css";
import BooksList from "./components/BooksList";
import books from "./data.js";

function App() {

  const handleFavorite = () => {
    console.log("hi");
  };

  return (
    <div className="App">
      <BooksList booksInfo={books} />
    </div>
  );
}

export default App;
