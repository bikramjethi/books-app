import React from "react";
import StyledShelf from "./Shelf.style";
import ShelfRow from "../ShelfRow";

const Shelf = ({ className, name, books }) => {
  let booksArray = [];
  while (books.length > 0) booksArray.push(books.splice(0, 18));
  console.log(books);
  return (
    <StyledShelf className={className}>
      <h2>{name}</h2>
      <div className="shelf">
        {booksArray.map((subArray, index) => (
          <ShelfRow
            className={`shelf-row ${index === 2 ? "last-row" : ""}`}
            books={subArray}
          />
        ))}
      </div>
    </StyledShelf>
  );
};

export default Shelf;
