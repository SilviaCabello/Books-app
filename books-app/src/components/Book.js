const Book = ({ image, title, author }) => {
  return (
    <div>
      <div className="image-container">
        <img src={image} alt="book cover " />
      </div>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default Book;
