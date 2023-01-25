const Book = (props) => {
  return (
    <div className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.author} </p>
    </div>
  );
};
export default Book;
