import { useState } from "react";

const Book = ({ image, title, author }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="card-container">
      <div className="image-container">
        <img src={image} alt="book cover " />
      </div>
      <h3>{title}</h3>
      <div onClick={() => setIsFavorite(!isFavorite)}>{isFavorite ? "★" : "☆"}</div>
      <p>{author}</p>
    </div>
  );
};

export default Book;
