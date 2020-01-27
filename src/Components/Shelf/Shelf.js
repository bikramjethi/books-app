import React from "react";
import StyledShelf from "./Shelf.style";
import ShelfRow from '../ShelfRow';

const Shelf = ({ className, name, books }) => (
  <StyledShelf className={className}>
    <h2>{name}</h2>
    <div className="shelf">
        <ShelfRow className='shelf-row' books={books}/>
        <ShelfRow className='shelf-row' books={books}/>
        <ShelfRow className='shelf-row' books={books}/>
    </div>
  </StyledShelf>
);

export default Shelf;
