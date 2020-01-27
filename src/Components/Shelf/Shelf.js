import React from "react";
import StyledShelf from "./StyledShelf.style";

const Shelf = ({ className, name }) => (
  <StyledShelf className={className}>
    <h2>{name}</h2>
    <div className="shelf"></div>
  </StyledShelf>
);

export default Shelf;
