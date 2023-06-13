import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Francesc Miralles and Hector Garcia",
    title: "Ikigai: The Japanese secret to a long and happy life",
    image:
      "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
    id: 1,
  },
  {
    author: " Napoleon Hill",
    title: "Think and Grow Rich",
    image:
      "https://m.media-amazon.com/images/I/41CqlzJS-NL._SX322_BO1,204,203,200_.jpg",
    id: 2,
  },
];

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className="BookList">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = ({ author, title, image, getBook, id }) => {
  // Adding getBook function inside the getSingleBook function. By doing this getBook function will now not be called when page load. But it will called when use click the button and it will called getSingleBook function after that it will invoke getBook function which is nested inside.
  // In other word we need to use reference rather than directly passing function. In this case reference is the getSingleBook function and main function which we are trying to executed when button is clicked is getBook.
  const getSingleBook = () => {
    getBook(id);
  };

  return (
    <article className="Book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={getSingleBook}>Click</button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
