import { useState } from "react";

const Book = ({ image, title, author, handleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    handleFavorite({ image, title, author });
  };

  return (
    <div className="card-container">
      <div className="image-container">
        <img src={image} alt="book cover " />
      </div>
      <h3>{title}</h3>
      <p>{author}</p>
      <div className="star" onClick={handleClick}>
        {isFavorite ? "★" : "☆"}
      </div>
    </div>
  );
};

export default Book;
