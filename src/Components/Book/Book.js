import React from "react";
import StyledBook from "./Book.style";

const Book = ({ details }) => <StyledBook>{details.name}</StyledBook>;

export default Book;
