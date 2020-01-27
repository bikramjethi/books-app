import React from "react";
import "./App.css";
import Shelf from "./Components/Shelf";
import { booksData } from "./appData";

function App() {
  return (
    <div className="App">
      <Shelf name="TO BUY" books={booksData} className="to-buy" />
      <Shelf name="BOUGHT" books={[]} className="bought" />
      <Shelf name="BOUGHT & READ" books={[]} className="read" />
    </div>
  );
}

export default App;
