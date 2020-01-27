import React from "react";
import "./App.css";
import Shelf from "./Components/Shelf";

function App() {
  return (
    <div className="App">
      <Shelf name="TO BUY" books={[]} className="to-buy"/>
      <Shelf name="BOUGHT" books={[]} className='bought'/>
      <Shelf name="TO READ" books={[]} className='to-read'/>
    </div>
  );
}

export default App;
