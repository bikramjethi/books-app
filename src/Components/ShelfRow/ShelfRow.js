import React from "react";
import StyledShelfRow from "./ShelfRow.style";
import Book from '../Book';

const ShelfRow = ({ className, books }) => (
  <StyledShelfRow className={className}>
    {books.map(book => (
      <Book details={book} />
    ))}
  </StyledShelfRow>
);

export default ShelfRow;
