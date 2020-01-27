import React from "react";
import "./App.css";
import Shelf from "./Components/Shelf";
import { booksData, BOUGHT, READ, TOBUY } from "./appData";

function App() {
  let toBuy = [],
    bought = [],
    read = [];

  // Segregation logic for books as per the status
  booksData.map(book => {
    switch (book.status) {
      case READ:
        read.push(book);
        break;
      case BOUGHT:
        bought.push(book);
        break;
      default:
        toBuy.push(book);
        break;
    }
  });
  return (
    <div className="App">
      <Shelf name="TO BUY" books={toBuy} className="to-buy" />
      <Shelf name="BOUGHT" books={bought} className="bought" />
      <Shelf name="BOUGHT & READ" books={read} className="read" />
    </div>
  );
}

export default App;
