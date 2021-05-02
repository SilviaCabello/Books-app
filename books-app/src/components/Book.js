const Book = ({ image, title, author }) => {
  return (
    <div>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default Book;
