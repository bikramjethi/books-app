import React from "react";
import StyledShelf from "./Shelf.style";
import ShelfRow from '../ShelfRow';

const Shelf = ({ className, name }) => (
  <StyledShelf className={className}>
    <h2>{name}</h2>
    <div className="shelf">
        <ShelfRow className='shelf-row' books={[]}/>
        <ShelfRow className='shelf-row' books={[]}/>
        <ShelfRow className='shelf-row' books={[]}/>
    </div>
  </StyledShelf>
);

export default Shelf;
