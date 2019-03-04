import React from "react";
import BookList from "../book-list";

const HomePage = () => {
  const books = [
    {
      id: 1,
      title: "Same book",
      author: "Same author"
    },
    {
      id: 2,
      title: "Another book",
      author: "And another author"
    }
  ];

  return <BookList books={books} />;
};

export default HomePage;
